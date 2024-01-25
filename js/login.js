import {  getData, validatelogin } from "./function.js";

const form = document.getElementById('form');
const password = document.getElementById('password');
const username = document.getElementById('username');
const button = document.getElementById('button');


button && button.addEventListener('click', function(e){
 e.preventDefault();

 if(validatelogin({password, username})){
    let data = getData();
    let user = data.find( el =>{
        return el.username == username.value
    })

    if(user&& user.password == password.value){
        localStorage.setItem('currentUser', username)
        window.location.assign('http://127.0.0.1:5500/index.html')
    }
 }

});