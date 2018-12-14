const Rebase = require('re-base');
const firebase = require('firebase');


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC4sOHDm9Ow_LJUfGXx71r14X0ynh5NsQ4",
    authDomain: "xumes-portifolio-37a84.firebaseapp.com",
    databaseURL: "https://xumes-portifolio-37a84.firebaseio.com",
    projectId: "xumes-portifolio-37a84",
    storageBucket: "xumes-portifolio-37a84.appspot.com",
    messagingSenderId: "759081425822"
};

const app = firebase.initializeApp(firebaseConfig);
const config = Rebase.createClass(app.database());

export const storage = app.storage();
export const auth = app.auth();

export default config;
