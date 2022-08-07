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
  if (firstName === '' || lasttName === '' || email === ''|| password === ''){
   //alert("insert the name")
   messageerror.innerText = "Please enter your details";
  } else {
   if (!firstName === ''|| !lasttName === ''|| !email===''| !password === '') {
      messageerror.innerText = 'Form submited'
   }
  }
  
 });