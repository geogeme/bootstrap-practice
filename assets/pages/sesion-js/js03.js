console.log("Sesion JS03 control de flujo")
console.log("No olvidaremos el reto de Ed")

//------Declaración de bloque de código---------
/*
Sintaxis:
        {

        }
Las varianles declaradas con let y const sólo tendrán alcance (scope) dentro del bloque o bloques anidados.
Si la variable en el bloque, tiene el mismo nombre que una variable fuera del bloque, se le da prioridad a la variable dentro del bloque
*/



// let y const no se pueden redeclarar, marca error  
//let firstname = "Lalo";
//const lastname= "García";
var age= "24"; 

let firstname = "Sergio";
const lastname= "Torres";
var age= "39"; // var no tiene alcance de bloquue


{
let firstname = "Mau";
const lastname= "Peniche";
var age = "26";
const colorFavorito  = "azul" //Solo tiene alcance dentro del bloque
var comidaFavorita = "pozole"

    console.log(`${firstname} ${lastname}` ); //mau peniche
    console.log(age); // 26
    console.log( colorFavorito);
    console.log(comidaFavorita);
    {
        const colorFavorito = "morado";
        console.log(colorFavorito);//
        console.log(firstname);//
       
        {  
            console.log(colorFavorito);//
          console.log(firstname);//
        }
    }
}

console.log(`${firstname} ${lastname}` ); //sergio torres
console.log(age); //26 en vez de 39, porque var  no tiene alcance de bloque 
//console.log( colorFavorito); // colorFavorito no esta definido 
console.log(comidaFavorita);

//-----------Conficional if-else-----------
/*
Ejectuta una sentencia si una condición específica es evaluada comom verdadera.

Sintaxis:
if (condición) sentencia; 

if (condición) {
    sentencias;
}

if(condición) sentencia;
else sentencia_si_condición_es_falsa;

if (condicion){
    sentencias;
}
else {
    sentencias;
}

if (condición) sentencia; 
else if (condición 2) sentencia2;
    else sentencia_si_condición2_es_falsa



if (condición1) sentencia;
else if (  condicion2) sentencia;
else if (condición3) sentencia
else if (condición4) sentencia;
......
else if (condicionN) sentencia;
else condición;


Nota: son las 11:11 y deseamos que  ed realice....


*/

const temperatura = 25;
let mensaje = "Temperatura de"; 

if (temperatura === 22) {
    mensaje += `${temperatura} grados centigrados es ideal`; //es equivalente a mensaje= mensaje + nvoTexto
}

else if ( temperatura >= 15 && temperatura <=21){
    mensaje += `${temperatura} grados centigrados es fría`
}
//rango de 23 a 30 -> es calurosa
else if ( temperatura >= 23 && temperatura <= 30){
    mensaje += ` ${temperatura} grados centigrados es calurosa`
}
else {
    mensaje = `La temperatura de ${temperatura} grados centigrados no es ideal=(`;
}

console.log(mensaje);

//------- Condicional Switch-------
/*
La condicional Switch evalua una expresión y se compara con el valor de cada instancia en 'case' y se ejecuta las sentencias asociadas a ese 'case' hasta encontrar la sentencia 'break' o se finalicen todas las sentencias de la condicional switch

Sintaxis
switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:         // es como un else
        sentencias;
        break;
}
*/

/**
 * Establece de la velocidad de un ventilador 
 * @param {number} velocidad del ventilador
 * @return {number} mensaje de la velocidad establecida
 */
const setVelocidadVentilador = ( velocidad= 0) => {
    let mensaje; 
    // la condicional switch utiliza la comparación estrica ( ===)
    switch ( parseInt(velocidad) ) {
        case 0:
            mensaje = "apagado";
            break;
        case 1:
            mensaje = "velocidad baja";
            break; 
        case 2:            //puede no haber break y aprovecho para reutiliar el codigo
            mensaje = "velocidad media";
            break;
        default:
            mensaje = "el nivel no existe";
            break; 
    }
    return mensaje;
}
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(1)}`); // baja
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(8)}`); // no existe
console.log(`valor: 2 ${setVelocidadVentilador(2)}`); // velocidad media
console.log(`valor: "2" ${setVelocidadVentilador("2")}`); // velocidad media
console.log(`valor: ? ${setVelocidadVentilador()}`); // apagado


// console.log(`valor: ? ${setVelocidadVentilador (prompt ("Velocidad", 1 ))}`);

//----------Ejercicio Estaciones del año------------
/* Preguntar por el número de mes (prompt o DOM), del 1 al 12
Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año

mes 12, 1, 2= invierno.
mes 3, 4, 5= primavera.
mes 6, 7 y 8 = verano
mes 9, 10 y 11 = otoño

Realizar una versión con if-else-elseif y otra con swith.
*/

/* let numMes = prompt("Ingresa el número de mes(if-else)");
if (numMes >= 1 && numMes <= 12) {
    if (numMes == 12 || numMes <= 2) {
        alert("Estás en Invierno");
    } else if (numMes <= 5) {
        alert("Estás en Primavera");
    } else if (numMes <= 8) {
        alert("Estas en Verano");
    } else alert("Estas en Otoño")

}
else {
    alert("Ingresa un mes válido")
}

const estacion = ( velocidad= 0) => {
    let mensaje; 
    // la condicional switch utiliza la comparación estrica ( ===)
    switch ( parseInt(velocidad) ) {
        case 12:
        case 1:
        case 2:
            mensaje = "invierno";
            break;
        case 3:
        case 4:
        case 5:
        mensaje = "primavera";
        break;
        case 6:
        case 7:
        case 8:
        mensaje = "verano";
        break;
        case 9:
        case 10:
        case 11:
        mensaje = "otoño";
        break;
        default:
            mensaje = "el nivel no existe";
            break; 
    }
    return mensaje;
} */

// ---------------Operador ternario-----------
/*
Es el único operador de JavaScript que tiene 3 operandos.
Generalmente se utiliza como opción a la sentencia if-else.
Sintaxis:
    condición ? expresiónSiCondiciónEsVerdadera: expresiónSiCondiciónEsFalsa;

*/

const pagoTarjetaCredito =false;

/* let msj;
if (pagoTarjetaCredito === true) msj= "A realizado el pago";
else msj = "No ha realizado el pago de TC"; */
const msj = pagoTarjetaCredito ? "A realizado el pago de TC" : "No ha realizado el pago de TC"
console.log(`El usuario ${msj}`);

// mini ejercicio------------
/*
Preguntar con prompt la edad del usuario;20
Si es >= 18 indicar en la consola "El usuario es mayor de edad";
Si no cumple con la condición "EL usuario no es mayor de edad".
*/
let edadUsuario= prompt("Ingresa edad")
if (edadUsuario >=18){
    alert("El usuario es mayor de edad")}
else (edadUsuario < 18); {
    alert("EL usuario no es mayor de edad")
}

const userAge= parseInt(prompt("Escribe tu edad: ", 18));
const mayorEdad = userAge >= 18 ? "": " no";
console.log(`EL usuario${mayorEdad} es mayor de edad`);

let edad = prompt("Ingresa la edad");
//const confirmacion = edad >= 18 ? "El usuario es mayor de edad" : "El usuario no es mayor de edad";
//alert(confirmacion);
alert(edad >= 18 ? "El usuario es mayor de edad" : "El usuario no es mayor de edad");

//......... Cálculo del factorial de un número usando recursividad ...............
/* 
function factorialConRecursividad( numero ){
    if ( numero <= 0 ) {
        return 1;
    } else {
        return numero * factorialConRecursividad( numero -1 );
    }
}

console.log(`El factorial recursivo de 5 es: 
${factorialConRecursividad(5)}`); */

function factorialConRecursividad (numero){
 const factorial =numero < 1 ? 1 : numero  * factorialConRecursividad (numero-1);
}
console.log(`El fa`)