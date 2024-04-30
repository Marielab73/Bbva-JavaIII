/* Conseguir el elemento con id "card-color-options" e imprimirlo por consola */

let cardInput = document.getElementById("card-color-options");
/* innerHtml permite leer el comtenido */
console.log(' imprimir card ' + cardInput.innerHTML);


/* Conseguir el elemento con id "card-image"  */
const cardImage = document.getElementById("card-image");

/* Crear un elemento <h3> con el texto "Elige un color:" */
/* creo elemento */
 let h3 = document.createElement("h3");
  h3.innerHTML = "Elige un Color:";
  h3.style.color = "black";
  
 

/* Crear una lista de divs con los colores disponibles (rojo, verde, azul, amarillo) con id `[color]-color-option`, agregarles la clase "color-option" y ponerle el color correspondiente de fondo */
/*azul - 0;  rojo - 152, amarillo - 210, verde - 280 */
let array = [ 
  { color: "blue", valor:0 },
  { color: "red", valor:152 },
  { color: "yellow", valor:210 },
  { color: "green", valor:280 },
    ];

   console.table (array);

/* 
  Agregar el h3 y la lista de colores al elemento con id "card-color-options" 
  Los divs deven estar anidados en un contenedor con clase "color-options-container".

  Las opciones deberían estar por encima de la imagen.
*/

 // creo el contenedor para los botones
 let divColor = document.createElement("div");
 divColor.classList.add ("color-options-container");

 // recorro para acomodar los botones 
  for (let index = 0; index < array.length; index++) {
   //  crear boton nuevo
    let divBoton = document.createElement("div");
    // suma clase 
    divBoton.classList.add('color-option');
    //agrego color
    divBoton.style.backgroundColor = array[index].color;
       
    //funcion onclick permite cambiar el color de card al presionar el boton
    divColor.addEventListener('click',function() {
     let cardColor = document.getElementById("card-image");
    // *********  No me queda claro cuando usar las "" , las '' o estas ` ...
    // me da la semsaciones q a veces funciona una u otra
     let grados = `${array[index].valor}` ;
     let rotar = grados+'deg' ;
     cardColor.style.filter = "hue-rotate(rotar)";
    //cardColor.style.filter = "hue-rotate(90deg)";
       
     console.log("rotateeee :" + rotar); 
     });

     // apend div boton al nuevo contenedor 
     divColor.appendChild(divBoton);

 };


/* obtengo una referencia a donde quiero dejar el elemento */
let h3InputRef = document.getElementById("card-color-options");
/* obtengo una referencia al padre */
let divRef = document.getElementById("card-color-options").parentNode;
/* inserto */
divRef.insertBefore (h3,h3InputRef);
divRef.insertBefore (divColor,h3InputRef);


 // resolvi el ejercicio pero encuentro un comportamiento raro, que el click
 // lo resuelve pero continua iterando y entiendo que es por eso que siempre 
 // termina en azul, y no se persive el cambio de color.



/* Crear una función que imprima los datos del formulario y asignarla al evento "click" del botón "Conocer oferta" de nuestra página*/

let form = document.getElementById("form-input");


function printFormData(event) {
event.preventDefault();
event.stopPropagation();

// obtengo valores del formulario
const nom = document.getElementById("names").value;
const surname = document.getElementById("surnames").value;
const dni = document.getElementById("dni").value;
const genero = document.getElementById("genre").value;
const email = document.getElementById("email").value;
const fecha = documet.getElementById("birth-date").value;
// imprimo
console.log(" Datos formulario :" + nom + surname + dni + genero + email + fecha );
}

//obtener el boton
const testButton = document.getElementById("test-button");

testButton.addEventListener('click', printFormData);

/* Hacer que los div de colores sean clickeables y que cambien el color de la tarjeta */


/* Ejemplo de promesa */

function obtenerUsuario(id) {
   
   try {
    console.log("usuario encontrado", usuario);
  } catch (error) {
    console.error(error);
  }
}

/* Traer la lista de ToDo's de https://jsonplaceholder.typicode.com/todos.
    Cuando la respuesta llegue, imprimir por consola la lista de  ToDo's.
*/

testButton.addEventListener("click", async (event) => {
  setInterval(() => {
    console.log("Hola");
  }, 1000);

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const parsedData = await response.json();
    console.log(parsedData);
  } catch (error) {
    console.error(error);
  }
});   




/* Hacer lo mismo que en el punto anterior pero con async/await */

/* Agregar al sitio un timer configurable que se pueda iniciar, pausar, y reiniciar. */