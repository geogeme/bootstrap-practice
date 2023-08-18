console.log("Sesión JS07 Promise");
/*
Las promesas es un patrón asincrónico que se utiliza par manejar operaciones asíncronas

Las promesas permiten realizar taras asíncrons y manejar los resultados (éxito o error) en un momento posterior.

Las promesas tienen 3  estados: 
1- Peding: El estado inicial de una promesa antes de que se resuelva o rechace
2- Resolved: La promesa se resuelve con un valor
3-Reject: La promesa es rechaza con una razón

Resolve y reject con funciones de callback.
Para crear una promesa se usa el constructor de la clase promise

sintaxis const pinkyPromise = new Promise (FncCallBack)
*/

// const pinkyPromise = new Promise ( ()=> {} );
// const pinkyPromise = new Promise (( fncCallBackResolve, fncCallBackReject) => {});
const pinkyPromise= new Promise ((fncCallBackResolve, fncCallBackReject) => {
    const menorEdad = true;

    if(menorEdad)
      fncCallBackResolve ("Hay que estar siempre juntos");
    else
      fncCallBackReject({ code: 404, message: "Ni te topo"});
});

// Consumir las promesas
// Se usa los métodos then, catch y finally

console.log("----->Promesas <----");
console.log("Antes de consumir la promesa");

//pinkyPromise(); // esto nos da un error porque no es algo secuencial, porque pinkyPromise es una promesa no una función;
//pinkyPromise.then().catch().finally(); // forma correcta consumir una promesa

/* pinkyPromise
    .then() // Se ejecuta una función de callback si la promesa fue resuelta
    .catch() // se ejecuta una función de callback si la promesa fue rechazada
    .finally(); // se ejecuta una función de callback
           //después de que la promesa fue resuelta o rechazada */



pinkyPromise
    .then( ( response ) => console.log(`Promesa Resuelta: ${response}`) )
    .catch( (error ) => console.log(`Promesa rechazada: ${error.message}`) ) 
    .finally( () => console.log ("Se ha terminado de resolver la promesa")); 
        
console.log("despues de consumir la promesa")

// Haciendo una promesa con parámetros
/**
 * Saludo especial para las personas que su nombre comience con A
 * El saludo se genera despues de 5 segundos
 */

const gretting = (name) => {
 // const myPromise= new Promise (()=>{});
  const myPromise= new Promise ((resolve, reject)=>{
    const firstChar= (name.charAt(0).toLowerCase());

    if( firstChar === 'a' )
    
      setTimeout(()=> resolve({code: 200, message: `Soy ${name} ¡holaa todos!`}), 5000)

    else if (firstChar=== 'l')
      resolve({code: 200, message: `Soy ${name} Saludos a toda la banda de la ch30 taka taka taka viene viene viene
    `});
    else
      reject({code: 404, message:  `No estoy disponible para ${name}`})
  }); // fin de promise

  return myPromise;

}

gretting("Ana")
  .then((response)=> console.log(response.code, response.message))
  .catch( error => console.log(error.code, error.message)); 

gretting("Luisa")
  .then((response)=> console.log(response.code, response.message))
  .catch( error => console.log(error.code, error.message)); 

gretting("Eduardo")
  .then((response)=> console.log(response.code, response.message))
  .catch( error => console.log(error.code, error.message)); 

//------consumir las promesas con async y await------
/*
Async y Await facilita la escritura y lectura de código asíncrono
Permite escribir códico asíncronico de manera similar a cómo se escribiría códico síncrono.

*/

async function grettingCh30(name) {
    console.log("-----Saludos a la bandita de la Ch30----");
    const result = await gretting (name);
    console.log ( result);
    console.log("----fin del saludo----");
}
//gretting= async () => {}
const grettingAll = async () => {
  try{}
   await grettingCh30( "Anneth"); 
   await grettingCh30 ("Leonardo");
}
grettingAll();