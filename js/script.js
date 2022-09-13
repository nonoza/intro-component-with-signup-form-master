//variable
let cta = document.querySelector('.cta');

const firstName = document.forms["signup"]["firstname"].value;
const lasttName = document.forms["signup"]["lastname"].value;
const email = document.forms["signup"]["email"].value;
const password = document.forms["signup"]["password"].value;
const form = document.getElementById("form");


form.addEventListener('submit', (e) =>{
   e.preventDefault();
   let messageerror = document.querySelector("small");
   let borderFields = document.querySelectorAll('.field');
  if (!firstName || !lasttName || !email|| !password){
   //alert("insert the name")
   messageerror.textContent = "Please enter your details";
   borderFields[0].style.border = " 2px solid  hsl(0, 100%, 74%)";
   borderFields[1].style.border = " 2px solid  hsl(0, 100%, 74%)";
   borderFields[2].style.border = " 2px solid  hsl(0, 100%, 74%)";
   borderFields[3].style.border = " 2px solid  hsl(0, 100%, 74%)";
  }
  if (email) {
   if (ValidateEmail(email)){
      messageerror.textContent = "Enter the correct email";
     }
  }

  
 });

 function ValidateEmail(emails) {

   const pattens = "/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/";
   return pattens.test(String(emails).toLocaleLowerCase());

}