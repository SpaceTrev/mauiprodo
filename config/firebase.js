const firebase = require('firebase');


const config = {
    apiKey: "AIzaSyA0HO8LK7fqmGeWlKZjVYjgQn0tSmMlcZI",
    authDomain: "maui-sustainable-solutions.firebaseapp.com",
    databaseURL: "https://maui-sustainable-solutions.firebaseio.com",
    projectId: "maui-sustainable-solutions",
    storageBucket: "maui-sustainable-solutions.appspot.com",
    messagingSenderId: "258456429603"
};

firebase.initializeApp(config);
let database = firebase.database();


module.exports = database;