import mysql.connector
import glob
import json
import csv
from io import StringIO
import itertools
import hashlib
import os
import cryptography
from cryptography.fernet import Fernet
import logging
from math import pow

class database:

    def __init__(self, purge = False):

        # Grab information from the configuration file
        self.database       = 'db'
        self.host           = '127.0.0.1'
        self.user           = 'master'
        self.port           = 3306
        self.password       = 'master'
        self.tables         = ['institutions', 'positions', 'experiences', 'skills','feedback', 'users']
        
        # NEW IN HW 3-----------------------------------------------------------------
        self.encryption     =  {   'oneway': {'salt' : b'averysaltysailortookalongwalkoffashortbridge',
                                                 'n' : int(pow(2,5)),
                                                 'r' : 9,
                                                 'p' : 1
                                             },
                                'reversible': { 'key' : '7pK_fnSKIjZKuv_Gwc--sZEMKn2zc8VvD6zS96XcNHE='}
                                }
        #-----------------------------------------------------------------------------

        self.cnx = mysql.connector.connect(
            user=self.user,
            password=self.password,
            host=self.host,
            port=self.port,
            database=self.database
        )
        self.cursor = self.cnx.cursor()

    def query(self, query = "SELECT * FROM users", parameters = None):

        cnx = mysql.connector.connect(host     = self.host,
                                      user     = self.user,
                                      password = self.password,
                                      port     = self.port,
                                      database = self.database,
                                      charset  = 'latin1'
                                     )


        if parameters is not None:
            cur = cnx.cursor(dictionary=True)
            cur.execute(query, parameters)
        else:
            cur = cnx.cursor(dictionary=True)
            cur.execute(query)

        # Fetch one result
        row = cur.fetchall()
        cnx.commit()

        if "INSERT" in query:
            cur.execute("SELECT LAST_INSERT_ID()")
            row = cur.fetchall()
            cnx.commit()
        cur.close()
        cnx.close()
        return row

    def createTables(self, purge=False, data_path = 'flask_app/database/'):
        ''' FILL ME IN WITH CODE THAT CREATES YOUR DATABASE TABLES.'''

        #should be in order or creation - this matters if you are using forign keys.
         
        if purge:
            for table in self.tables[::-1]:
                self.query(f"""DROP TABLE IF EXISTS {table}""")
            
        # Execute all SQL queries in the /database/create_tables directory.
        for table in self.tables:
            
            #Create each table using the .sql file in /database/create_tables directory.
            with open(data_path + f"create_tables/{table}.sql") as read_file:
                create_statement = read_file.read()
            self.query(create_statement)

            # Import the initial data
            try:
                params = []
                with open(data_path + f"initial_data/{table}.csv") as read_file:
                    scsv = read_file.read()            
                for row in csv.reader(StringIO(scsv), delimiter=','):
                    params.append(row)
            
                # Insert the data
                cols = params[0]; params = params[1:] 
                self.insertRows(table = table,  columns = cols, parameters = params)
            except:
                print('no initial data')

    def insertRows(self, table='table', columns=['x','y'], parameters=[['v11','v12'],['v21','v22']]):
        
        # Check if there are multiple rows present in the parameters
        has_multiple_rows = any(isinstance(el, list) for el in parameters)
        keys, values      = ','.join(columns), ','.join(['%s' for x in columns])
        
        # Construct the query we will execute to insert the row(s)
        query = f"""INSERT IGNORE INTO {table} ({keys}) VALUES """
        if has_multiple_rows:
            for p in parameters:
                query += f"""({values}),"""
            query     = query[:-1] 
            parameters = list(itertools.chain(*parameters))
        else:
            query += f"""({values}) """                      
        
        insert_id = self.query(query,parameters)[0]['LAST_INSERT_ID()']         
        return insert_id


    def getResumeData(self):
        # Get all institutions
        query = "SELECT * FROM institutions;"
        institutions = self.query(query)

        # Get all positions
        query = "SELECT * FROM positions;"
        positions = self.query(query)

        # Get all experiences
        query = "SELECT * FROM experiences;"
        experiences = self.query(query)

        # Get all skills
        query = "SELECT * FROM skills;"
        skills = self.query(query)
        
        # Build the resume data dictionary
        resumeData = {}
        for institution in institutions:
            inst_id = institution['inst_id']
            resumeData[inst_id] = {
                'type': institution['type'],
                'name': institution['name'],
                'department': institution['department'],
                'address': institution['address'],
                'city': institution['city'],
                'state': institution['state'],
                'zip': institution['zip'],
                'positions': {}
            }
            for position in positions:
                if position['inst_id'] == inst_id:
                    position_id = position['position_id']
                    resumeData[inst_id]['positions'][position_id] = {
                        'title': position['title'],
                        'responsibilities': position['responsibilities'],
                        'start_date': position['start_date'],
                        'end_date': position['end_date'],
                        'experiences': {}
                    }
                    for experience in experiences:
                        if experience['position_id'] == position_id:
                            experience_id = experience['experience_id']
                            resumeData[inst_id]['positions'][position_id]['experiences'][experience_id] = {
                                'name': experience['name'],
                                'description': experience['description'],
                                'hyperlink': experience['hyperlink'],
                                'start_date': experience['start_date'],
                                'end_date': experience['end_date'],
                                'skills': {}
                            }
                            for skill in skills:
                                if skill['experience_id'] == experience_id:
                                    skill_id = skill['skill_id']
                                    resumeData[inst_id]['positions'][position_id]['experiences'][experience_id]['skills'][skill_id] = {
                                        'name': skill['name'],
                                        'skill_level': skill['skill_level']
                                    }
        return resumeData


    def getFeedBackData(self):
        query = "SELECT * FROM feedback;"
        feedback = self.query(query)
        feedback_dict = {}
        for row in feedback:
            feedback_dict[row['comment_id']] = {
                'name': row['name'],
                'email': row['email'],
                'comment': row['comment']
            }
        return feedback_dict

#######################################################################################
# AUTHENTICATION RELATED
#######################################################################################
    def createUser(self, email='me@email.com', password='password', role='user'):
        # check if user already exists
        query = "SELECT * FROM users WHERE email = %s;"
        row = self.query(query, (email,))
        if row:
            return {'success': False, 'message': 'User already exists'}

        # Hash password
        hashed_password = self.onewayEncrypt(password)

        #Insert the row
        columns = ['email', 'password', 'role']
        parameters = [[email, hashed_password, role]]
        insert_id = self.insertRows('users', columns, parameters)

        if insert_id:
            return {'success': True, 'user_id': insert_id}
        else:
            return {'success': False, 'message': 'Failed to create user.'}

    def authenticate(self, email='me@email.com', password=None):
        # Hash the given password
        hashed_password = self.onewayEncrypt(password)

        #Query to get the row
        query = "SELECT * FROM users WHERE email=%s;"
        row = self.query(query, (email,))
        
        # Check if hashed password in db matches above
        if row and row[0]['password'] == hashed_password:
            return {'success': True, 'user_id': row[0]}
        else:
            return {'success': False, 'password': hashed_password, 'pass': email}



    def onewayEncrypt(self, string):
        encrypted_string = hashlib.scrypt(string.encode('utf-8'),
                                          salt = self.encryption['oneway']['salt'],
                                          n    = self.encryption['oneway']['n'],
                                          r    = self.encryption['oneway']['r'],
                                          p    = self.encryption['oneway']['p']
                                          ).hex()
        return encrypted_string


    def reversibleEncrypt(self, type, message):
        fernet = Fernet(self.encryption['reversible']['key'])
        
        if type == 'encrypt':
            message = fernet.encrypt(message.encode())
        elif type == 'decrypt':
            message = fernet.decrypt(message).decode()

        return message


