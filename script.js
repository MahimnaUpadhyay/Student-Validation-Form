  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  //copy config after creating firebase realtime database
  const firebaseConfig = {
    apiKey: "AIzaSyA4phaybD2tKRt8XC0pZA17-1O1yH7ePXU",
    authDomain: "schoolmanagement-8ef76.firebaseapp.com",
    databaseURL: "https://schoolmanagement-8ef76-default-rtdb.firebaseio.com",
    projectId: "schoolmanagement-8ef76",
    storageBucket: "schoolmanagement-8ef76.appspot.com",
    messagingSenderId: "1083305779499",
    appId: "1:1083305779499:web:10f1c38a5e25b88afea56e",
    measurementId: "G-WN2NZ8P32L"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //reference for firebase
  var schoolmanagement = firebase.database().ref("schoolmanagement");

  document.getElementById('schoolmanagement').addEventListener('submit', submitform);

 function submitform(e)
 {
    e.preventDefault();

    var name=getElementval('name');
    var std=getElementval('std');
    var div=getElementval('div');
    var rollno=getElementval('rollno');
    var sub=getElementval('sub');
    
    savedata(name,std,div,rollno,sub);

   //  alerting message
    document.querySelector(".alert").style.display = "block";

    //remove the alert
    setTimeout(() => 
    {
      document.querySelector(".alert").style.display= "none";
    }, 3000);

    //reset the form
    document.getElementById("schoolmanagement").reset();
 }

 const savedata = (name, std, div, rollno, sub) =>
 {
   var newSchoolmanagement = schoolmanagement.push();

   newSchoolmanagement.set({
      name: name,
      std: std,
      div: div,
      rollno: rollno,
      sub: sub
   });
 }

 const getElementval=(id) => 
 {
   return document.getElementById(id).value;
 }