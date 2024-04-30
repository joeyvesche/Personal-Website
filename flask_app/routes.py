# Author: Prof. MM Ghassemi <ghassem3@msu.edu>
from flask import current_app as app
from flask import render_template, redirect, request, session, url_for, copy_current_request_context
from flask_socketio import SocketIO, emit, join_room, leave_room, close_room, rooms, disconnect
from .utils.database.database  import database
from werkzeug.datastructures   import ImmutableMultiDict
from pprint import pprint
import json
import random
import functools
from . import socketio
import logging
db = database()
users = []
login = False

#######################################################################################
# AUTHENTICATION RELATED
#######################################################################################
def login_required(func):
    @functools.wraps(func)
    def secure_function(*args, **kwargs):
        if "email" not in session:
            return redirect(url_for("login", next=request.url))
        return func(*args, **kwargs)
    return secure_function

def getUser():
	if 'email' in session:
		encrypted_email = session['email']
		decrypted_email = db.reversibleEncrypt('decrypt', encrypted_email)
		return decrypted_email
	else:
		return 'Unknown'

	#return session['email'] if 'email' in session else 'Unknown'

@app.route('/login')
def login():
	return render_template('login.html')

@app.route('/logout')
def logout():
	session.pop('email', default=None)
	global login
	login = False
	return redirect('/')


@app.route('/processlogin', methods=["POST"])
def process_login():
	global login
	form_fields = dict((key, request.form.getlist(key)[0]) for key in list(request.form.keys()))

    # Check if the user's email and password match a value in the database
	authenticated = db.authenticate(form_fields['email'], form_fields['password'])
    
	if authenticated['success']:
        # If authenticated, update the user's session with encrypted email
		session['email'] = db.reversibleEncrypt('encrypt', form_fields['email'])
		status = True
		login = True
	else:
		status = False
		login = False
    # Return status as JSON object to AJAX handler in login.html
	return json.dumps(status)


#######################################################################################
# CHATROOM RELATED
#######################################################################################
@app.route('/chat')
@login_required
def chat():
    return render_template('chat.html', user=getUser())

@socketio.on('joined', namespace='/chat')
def joined(message):
	join_room('main')
	users.append(getUser())
	if 'owner@email.com' in users: # Owner
		emit('status', {'msg': getUser() + ' has entered the room.', 'user' : getUser(), 'style': 'width: 100%;color:blue;text-align: right; font-size:10%;'}, room='main')
	else: # guest
		emit('status', {'msg': getUser() + ' has entered the room.', 'user' : getUser(), 'style': 'width: 100%;color:grey;text-align: left'}, room='main')

@socketio.on('text', namespace='/chat')
def handle_text(message):
    if 'owner@email.com' in users: # Owner
        emit('message', {'text': message['text'], 'user': getUser(), 'style': 'width: 100%;color:blue;text-align: right'}, room='main')
    else: #guest
        emit('message', {'text': message['text'], 'user': getUser(), 'style': 'width: 100%;color:grey;text-align: left'}, room='main')
	

@socketio.on('disconnect', namespace='/chat')
def handle_disconnect():
	leave_room('main')
	if 'owner@email.com' in users: # Owner
		emit('status', {'msg': getUser() + ' has left the room.', 'user': getUser(), 'style': 'width: 100%;color:blue;text-align: right'}, room='main')
		users.remove(getUser())
	else: # guest
		emit('status', {'msg': getUser() + ' has left the room.', 'user': getUser(),'style': 'width: 100%;color:grey;text-align: left'}, room='main')
		users.remove(getUser())
#######################################################################################
# OTHER
#######################################################################################
@app.route('/')
def root():
	return redirect('/home')

@app.route('/home')
def home():
	x     = random.choice(['I have a dog named Buck.','I like to hunt and fish as hobbies.','Mac and Cheese is my favorite food.'])
	return render_template('home.html', fun_fact = x, user=getUser())

@app.route('/resume')
def resume():
	resume_data = db.getResumeData()
	pprint(resume_data)
	return render_template('resume.html', resume_data = resume_data, user=getUser())

@app.route('/projects')
def projects():
	return render_template('projects.html', user=getUser())

@app.route('/piano')
def piano():
	return render_template('piano.html', user=getUser())

@app.route('/processfeedback', methods = ['POST'])
def processfeedback():
	feedback = request.form
	columns = ['name', 'email','comment']
	name = feedback.get('name')
	email = feedback.get('email')
	comment = feedback.get('comment')
	values = [[name, email, comment]]
	db.insertRows('feedback', columns, values)
	return redirect('/feedback')

@app.route('/feedback', methods = ['GET'])
def feedback():
	feedback_data = db.getFeedBackData()
	pprint(feedback_data)
	return render_template('feedback.html', feedback_data = feedback_data)

