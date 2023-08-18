console.log("JS06-Formulario");

//Obtenemos la referencia del formulario 
// const registerForm = document.getElementById("registerForm");
const registerForm= document.forms["registerForm"];

//registerForm.addEvenetListener("click", fncCallback);

registerForm.addEventListener("submit", (event) => {
    event.preventDefault(); //omitir todas las acciones por default
   // console.log( event); datos del click
   /* const email= registerForm["email"];
   const birthdate =registerForm.elements ["birthdate"]
   console.log(email.value, birthdate.value); */
   const user = {
    fullname: registerForm.elements["fullname"].value,
    email: registerForm.elements["email"].value,
    password: registerForm.elements["password"].value,
    birthdate: registerForm.elements["birthdate"].value, //
   }
 const age= calculateAge(user);{
    if( age.year < 18 ){
        // alert (`Al rato regresas, aún tienes ${age.year} años`);
        appendAlert(`Al rato regresas, aún tienes ${age.year} años`, 'success')
      }
    }
});

const calculateAge = ({birthdate: birthdateStr}) => {
console.log(birthdateStr);

const today = new Date();
const birthdate= new Date (birthdateStr);

const difference = today - birthdate; 
console.log(difference); 
const age = new Date (difference);
//console.log( age);
console.log(`Years: ${age.getFullYear()-1970}`); //
console.log(`Month: ${age.getMonth()}`);
console.log(`Days: ${age.getDay()}`);
return {
    year: age.getFullYear() - 1970 ,
    month: age.getMonth() ,
    day: age.getDate() ,
}
}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

/* const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}
 */
