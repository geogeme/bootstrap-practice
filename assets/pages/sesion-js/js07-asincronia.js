console.log("Sesión JS07 Asincronía");

//-------Programación sincrónica (secuencial)------

const primerPaso = () =>{
  console.log("01- Inicio del mi programa");
}
const segundoPaso = () =>{
  console.log("02- Desarrollo del mi programa");
}
const tercerPaso = () =>{
  console.log("03- Fin de mi programa");
}

primerPaso();
segundoPaso();
tercerPaso();

//------------------- Programación asíncrona-----------
/* setTimeout ()
  Establece un temporizador que ejecuta una función de callback una vez que expire el temporizador
   
  sintaxis:
    setTimeout(fncCallback, time_ms, argumentos_fnc);
    setTimeout ()  => {}  , tiempo_ms); 
*/
const saludo = ( name) => console.log(`Hola ${name}`);

const pasoAsincrono = (name) => {
   // setTimeout(saludo, 5000,  name)
   //setTimeout ((person) => console.log(`Hola ${person}`), 5000, name);
   setTimeout(()=> console.log(`Hola ${name}`), 5000);
};

console.log("*******");
//primerPaso(); //01 Inicio de mi programa 
//pasoAsincrono("Baby Yoda multiverso");  // 5s -> se muestra Hola Baby Yoda
//tercerPaso(); // Fin del prgramana, en la consola  despues de llos 5 segundos y el fin ed mi programa, veo el saludo 


//------setInterval----
const pasoConIntervalo = () => { 
  setInterval( ()=> console.log("Hola " + new Date().toLocaleString() )  , 3000 );
}

//primerPaso();// 01-Inicio del prgrama
//pasoConIntervalo();
//tercerPaso(); // 03- Fin del programa 

//----------Iniciar y detener setInterval-----
const startInterval =document.getElementById("startInterval");
const stopInterval= document.getElementById("stopInterval");
const dateH2= document.getElementById("dateH2");
let idInterval =[]// obtiene la referencia del ID que nos proporciona setInterval

startInterval.addEventListener("click", ()=>{
const id =setInterval(()=> { dateH2.innerHTML= new Date().toLocaleString()  },1000);
 //LIFO 
 idInterval.push( id);
 disableStartButton (); 

});
stopInterval.addEventListener("click", () => {
  console.table( idInterval); 
  clearInterval(  idInterval.pop() ); // detener el intervalo
  enableStartButton();

});


const stateButtons = ( startButtonState = false, stopButtonState = false ) => {
  //startInterval.disabled = startButtonState;
  //stopInterval.disabled = stopButtonState;
  startInterval.style.display= startButtonState ? "none" : "inline";
  stopInterval.style.display= stopButtonState ? "none" : "inline";
};

const disableStartButton = () =>{
  stateButtons( true, false);
};

const enableStartButton = () =>{
  stateButtons( false, true);
};

enableStartButton();

