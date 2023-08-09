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