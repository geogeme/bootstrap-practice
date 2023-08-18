console.log("Sesión JS06 Manipulación del DOM");
/*
*Modificar un elemento HTML por medio de su ID 
*
*/
const findElementById =  () => {
  const title= document.getElementById("title");
  console.log(title);
  console.log(typeof title); //Object
  console.log(title.innerHTML); // Sesión X

 // title.innerHTML = `Generation -Sesión JS   06`;
 title.innerHTML = ` <span id="generation" class= "bg-primary"> Generation </span>- Sesión JS06`;


}
findElementById();

//------------------ Encontrar elementos por tu etiqueta (tag)-----

const changeElementByTagName= () => {
  const unorderList= document.getElementsByTagName("li"); //colección de elementos
  console.log(unorderList);// HTML collection

  for (const listItem of unorderList) {
    listItem.innerHTML = `<span class = "text-success fs-4"> ${listItem.innerHTML} 😶‍🌫️ </span>`
  }
}
changeElementByTagName();

//---------Uso de selector universal--------------
//querySelector

const findElementByQuerySelector = () => {
 // const element = document.querySelector( "#title"); // seleccionar por ID
 // const element = document.querySelector(".text-warning"); // seleccionar por clase
 // const element= document.querySelector("ul"); //sleccionar por tag
 // const element= document.querySelector("li"); //sleccionar por tag
 const element = document.querySelector("h1 span"); //selecciona por tag
  console.log(element);
}

findElementByQuerySelector();

//---------------- Crear nuevo elemento HTML-------
//appendChild

const newElement = () => {
  const newElement = document.createElement ("div"); // <div> </div>

  newElement.innerHTML = `la Ch30 le gusta:
  <ul>
  <li> El Helado </li>
  <li> El chisme </li>
  <li> Los corridos tumbados </li>
  <li> Escuchar a Mau </li>
  <li> Ser amigos de Anneth </li>
  
  </ul>
  `;

  const  descriptionCh30 = document.querySelector("#descriptionCh30");
  descriptionCh30.appendChild(newElement);
}
newElement();

//-------Cambiar el color de texto-----
//style.color

const changeColor = (color) => {

  const descriptionCh30 = document.getElementById("descriptionCh30");
  descriptionCh30.style.color= "purple"; // cambio de color de fuente
  descriptionCh30.style.border = `thick solid ${color}`
} 
changeColor("beige"); 

//------------ Propiedades de visualización------
//             Desaparecen el elemento 
// display: none(quitar el elemento del DOM)
//visibility: hidden (ocultar el elemento)

const getReferenceTitleGeneration= () => {
  return document.getElementById("generation");
}

const displayNoneElement = () =>{
  const generation = document.getElementById();
  generation.style.display= "none"; // quitar el elemento 

}

const hiddenElement = () => { 
  const generation = getReferenceTitleGeneration();
  generation.style.visibility= "hidden"; // ocultar el elemento 

}

const resetElements= () => {
  const generation = getReferenceTitleGeneration();
  generation.style.visibility= "visible"; 
  generation.style.display ="inline";
}
