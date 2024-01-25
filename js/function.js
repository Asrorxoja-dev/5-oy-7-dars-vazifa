const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


function validate(data){
 if(!data.name.value){
    alert('nom kiritish shart');
    data.name.focus();
    return false;
 };

 if(data.name.length > 3){
    alert('nom 3 ta  belgidan kop bolishi kerak');
    data.name.focus();
    return false;
 };

 if(!data.email.value){
    alert('email kiritish shart');
    data.email.focus();
    return false;
 };

 if(!validateEmail(data.email.value)){
    alert('email notogri kiritildi');
    data.email.focus();
    return false;
 };

 if(!data.username.value){
    alert('username kiritish shart');
    data.username.focus();
    return false;
 };

if (data.username.value){
   let dataUsers = getData();
   let isExist = dataUsers.some(user => {
      return data.username.value== user.username
   })
   if(isExist){
      alert("bunday foydalanuvchi mavjud");
      data.username.focus();
      return false;
   }

   
}

 if(!data.password.value){
    alert('password kiritish shart');
    data.password.focus();
    return false;
 };

 if(data.password.value.length > 4){
    alert('password 4 ta belgidan kop bolishi shart');
    data.password.focus();
    return false;
 };

 if(data.password.value != data.repassword.value){
    alert('parollar mos kelmadi shart');
    data.password.focus();
    data.repassword.value = '';
    return false;
 };

 if(!data.repassword.value){
    alert('repassword kiritish shart')
    data.repassword.focus();
    return false;
 };


    return true;
};


function validatelogin(data){
 
  
   
  
   if(!data.username.value){
      alert('username kiritish shart');
      data.username.focus();
      return false;
   };
  
  
   if(!data.password.value){
      alert('password kiritish shart');
      data.password.focus();
      return false;
   };
  
   if(data.password.value.length > 4){
      alert('password 4 ta belgidan kop bolishi shart');
      data.password.focus();
      return false;
   };
  
   
  
   
      return true;
  };


function getData(){
   let data=[];
   if(localStorage.getItem('users')){
       data= JSON.parse(localStorage.getItem('users'))
   }

   return data;
}

export{validate, getData, validatelogin};