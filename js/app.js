
  // Initialize Firebase(2)
 var config = {
    apiKey: "AIzaSyArHZYFkkAuVfbGtya5AriEitNs21CVFh8",
    authDomain: "treatmentbuddy.firebaseapp.com",
    databaseURL: "https://treatmentbuddy.firebaseio.com",
    projectId: "treatmentbuddy",
    storageBucket: "treatmentbuddy.appspot.com",
    messagingSenderId: "79985474831",
    appId: "1:79985474831:web:95e6a8a4222c3780"
  };
firebase.initializeApp(config);

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document.getElementById('contactform')
  document.addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
    let subject = document.querySelector('#subject').value;
      let message = document.querySelector('#message').value;


  //send message values
  sendMessage(name, email,subject,message);

  //Show Alert Message(5)
 

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('contactform').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email,subject,message) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    subject:subject,
    message:message
  });
}
