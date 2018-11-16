// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyC-fgDmqzmAT5mtWcDubpWvTdRFwF4BKpQ",
    authDomain: "school-b9993.firebaseapp.com",
    databaseURL: "https://school-b9993.firebaseio.com",
    projectId: "school-b9993",
    storageBucket: "school-b9993.appspot.com",
    messagingSenderId: "575418282170"
  };
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Academic');


// Listen for form submit
document.getElementById('academicform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();
  // Get values
  var academic = getdropword('ddlacemedices');
  // Save message
  saveMessage(academic);
  alert("Data Inserted");
  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('academicform').reset();
}


function getdropword(ddl){
	var e = document.getElementById(ddl);
    return e.options[e.selectedIndex].value;
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}


// Save message to firebase
function saveMessage(academic){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    acemedices: academic,
  });
}