 function validateName(value){
    let nameRegEx=/^[a-zA-Z]+$/g;
    if(nameRegEx.test(value)){

 
    }
else{


alert('Name Should Only contain letters');}

}
function validateEmail(value){      
   var emailPattern =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   if( emailPattern.test(value)){
     

   } else{
    alert("email in not correct")
   }
 } 
 function confirmEmail(value){      
   let cemail=document.getElementById('cemail').value;
   if( value.match(cemail)){
     

   } else{
    alert("email doesn't match");
   }
 } 

 function Validatepassword(pw) {
          
          let regExp =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        
          if (pw.match(regExp)) {
     
             
          }else{
          alert('password is weak ');
          }
        }
        function confirmPw(value){      
   let cpw=document.getElementById('cpw').value;
   if( value.match(cpw)){
     

   } else{
    alert("password doesn't match");
   }
 } 
document.getElementById('submit').addEventListener('click',function(){
    let fn=document.getElementById('name').value;
    let ln=document.getElementById('lname').value;
    let email=document.getElementById('email').value;
    let cemail=document.getElementById('cemail').value;
    let pw=document.getElementById('password').value;

    validateName(fn);
    validateName(ln);
    validateEmail(email)
    confirmEmail(cemail);
    Validatepassword(pw);
    confirmPw(pw);
});
 