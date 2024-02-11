 function toggle_visibility() {
    var e = document.getElementById('feedback-main');
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }

 function toggleFeedback() {
   var feedbackForm = document.getElementById("feedback-form");
   if (feedbackForm.style.display === "none") {
     feedbackForm.style.display = "block";
   } else {
     feedbackForm.style.display = "none";
   }
 }
 