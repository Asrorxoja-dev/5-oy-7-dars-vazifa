import { validate, getData } from "./function.js";


const button = document.getElementById('button');
const name = document.getElementById('name');
const username = document.getElementById('username');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const form = document.getElementById('form');
const email = document.getElementById('email');
const year = document.getElementById('year');
const surname = document.getElementById('surname');





button.addEventListener('click', function(e)  {
    e.preventDefault();

    if (validate({ name, username, password, repassword, form, email, surname, year })) {
        let user = {
            name: name.value,
            username: username.value,
            email: email.value,
            password: password.value,
            repassword: repassword.value,
            name: name.value

        }

        let data = getData();
        data.push(user);
        localStorage.setItem('user', JSON.stringify(data));



        let currentUrl = window.location.href;
        let pageIndex = currentUrl.search('login');
        const domain = currentUrl.substring(0, pageIndex);
        window.location.assign(`${domain}/login.html`);
     form.reset();
        
    }


    
   
});

