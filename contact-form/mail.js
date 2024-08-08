const firebaseConfig = {
    apiKey: "AIzaSyAY4GbMOuRy5iPW12sOr-8VoNZ5iSGPkcY",
    authDomain: "contact-form-b7a69.firebaseapp.com",
    databaseURL: "https://contact-form-b7a69-default-rtdb.firebaseio.com",
    projectId: "contact-form-b7a69",
    storageBucket: "contact-form-b7a69.appspot.com",
    messagingSenderId: "933457983534",
    appId: "1:933457983534:web:7369ca20bca500f33807bf",
    measurementId: "G-0CBZ4RXJT1"
  };

  //inialize firebase
  firebase.initializeApp(firebaseConfig);



  

  //reference your database
    var contactFormDB = firebase.database().ref("contact-form")

  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();

    var firstName = getElementVal('fname');
    var lastName = getElementVal('lname');
    var phoneNumber = getElementVal('phone');

    saveMessages(firstName, lastName, phoneNumber);

    // enable ALERT
    document.querySelector('.alert').style.display = "block";

    // remove ALERT
    setTimeout(() => {
      document.querySelector('.alert').style.display = "none";
    }, 3000)

    //reset FORM
    document.getElementById('contactForm').reset()

  }

  const saveMessages = (firstName, lastName, phoneNumber) => {
    const newContactForm = contactFormDB.push();

    newContactForm.set({
        firstName : firstName,
        lastName : lastName,
        phoneNumber : phoneNumber
    })
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value
  }