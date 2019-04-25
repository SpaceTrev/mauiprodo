let name;
let email;
let message;

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAKW0H3vcXsrCBHsec1ceV_XXumYRyFRQA",
    authDomain: "mss-messages.firebaseapp.com",
    databaseURL: "https://mss-messages.firebaseio.com",
    projectId: "mss-messages",
    storageBucket: "mss-messages.appspot.com",
    messagingSenderId: "845717715279"
};

firebase.initializeApp(config);
let database = firebase.database();

document.getElementById('contact-form').addEventListener('submit', submitToFirebase);

function submitToFirebase(e) {
    e.preventDefault();
    name = getFormInput('name');
    email = getFormInput('email');
    message = getFormInput('message');
    let firebaseRef = database.ref("ContactFormMessages");
    firebaseRef.push({
        Name: name,
        Email: email,
        Message: message
    }).then(() => {
        return document.getElementById('contact-form').reset();
    })

}

function getFormInput(id) {
    return [document.getElementById(id).name, document.getElementById(id).value]
}