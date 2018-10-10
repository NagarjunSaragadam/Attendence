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
var messagesRef = firebase.database().ref('Student');
var messagesReffac = firebase.database().ref('faculty');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
document.getElementById('Facultyform').addEventListener('submit', submitFormfaculty);

function submitFormfaculty(e){
     e.preventDefault();
  // Get values
  var facultyid = getInputVal('txtfacultyid');
  var firstname = getInputVal('txtffirstname');
  var secondname = getInputVal('txtfsecondname');
  var email = getInputVal('txtfemail');
  var phone = getInputVal('txtfphone');  
  var address = getInputVal('txtfaddress');
  var year = getdropword('ddlfyear');
  var sem = getdropword('ddlfsem');

  // Save message
  saveMessage2(facultyid, firstname, secondname,email, phone, address,year,sem);
  alert("Faculty Inserted");
  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('Facultyform').reset();
}

// Submit form
function submitForm(e){
  e.preventDefault();
  // Get values
  var studentid = getInputVal('txtstudentid');
  var firstname = getInputVal('txtfirstname');
  var secondname = getInputVal('txtsecondname');
  var email = getInputVal('txtemail');
  var phone = getInputVal('txtphone');
  var fathername = getInputVal('txtfathername');
  var mothername = getInputVal('txtmothername');
  var fatherphone = getInputVal('txtfatherphone');
  var address = getInputVal('txtaddress');
  var year = getdropword('ddlyear');
  var sem = getdropword('ddlsem');

  // Save message
  saveMessage(studentid, firstname, secondname,email, phone, fathername,mothername,fatherphone,address,year,sem);
  alert("Data Inserted");
  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}


function getdropword(ddl){
	var e = document.getElementById(ddl);
    return e.options[e.selectedIndex].value;
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}



function saveMessage2(facultyid, firstname, secondname,email, phone, address,year,sem){
  var newMessageRef = messagesReffac.push();
  newMessageRef.set({
    facultyid: facultyid,
    firstname:firstname,
    secondname:secondname,
    email:email,
    phone:phone,	
	address:address,
	year:year,
	sem:sem
  });
}


// Save message to firebase
function saveMessage(studentid, firstname, secondname,email, phone, fathername,mothername,fatherphone,address,year,sem){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    studentid: studentid,
    firstname:firstname,
    secondname:secondname,
    email:email,
    phone:phone,
	fathername:fathername,
	mothername:mothername,
	fatherphone:fatherphone,
	address:address,
	year:year,
	sem:sem
  });
}