let member_name;
let member_email;
let social_media_handle;

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

document.getElementById('club-makena-form').addEventListener('submit', submitToFirebase);


function submitToFirebase(e) {
    e.preventDefault();
    member_name = getFormInput('name');
    member_email = getFormInput('email');
    social_media_handle = getFormInput('social-media-handle');
    let firebaseRef = database.ref("ClubMakenaMembers");
    firebaseRef.push({
        Member_Name: member_name,
        Member_Email: member_email,
        Social_Media_Handle: social_media_handle
    }).then(() => {
        return resetForm('club-makena-form');
    })

}

function getFormInput(id) {
    return [document.getElementById(id).name, document.getElementById(id).value]
}

function resetForm(id) {
        return document.getElementById(id).reset() + console.log('document submitted sucessfully');
}

