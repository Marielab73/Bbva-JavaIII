/* 
  Imprimir el siguiente mensaje en la consola:
      
       "Bienvenido a tu primer script!" 


       console.log("Bienvenido a tu primer script!");

*/
// function printGreeting() {

// console.log("Holaa");

// }

 //let greeting = "hola"
 //console.log(greeting);

// objeto
// const user={
//  name:"juan" ;
//  surname: "perez";
// };

//user.name = "Juana" ;
//const numeros = [ 1,2,3,4];


//function create (name) {
//return "hola" $name ; 

//}


 /* 

  Declarar las siguientes variables:
  
  * Un numero constante "PI" con valor 3.14
  * Una texto constante llamado greetings con valor "Hello"
  * Un objeto modificable user con valor { name: "John", surname: "Doe", age: 30 }
  * Un array llamado "primes" con los valores [2, 3, 5, 7, 11]
*/

const PI = 3.14;
const greeting = "Hello" ;

const user={
  name:"John",
  surname: "Doe",
  age:30,
 };

 const primes = [ 1,3,5,7,11];


/* Imprimir por consola la cadena de texto "Hola, Fulanito!" usando las variables definidas en el ejercicio anterior*/

 
  console.log("Hola Fulanito!");

/* 
  Sea r = 5 el radio de una circunferencia calcular el perimetro y area de la misma e imprimir por consola el mensaje "Perimetro: [perimeter]" .
*/
const r=5;
const perimetro = 2* PI * r;

const area = PI * r * r; 
console.log("Perimetro:", perimetro);

/* Imprimir por consola el mensaje "El usuario es adulto" si efectivamente es así */

if (user.age > 21) {
    console.log("El usuario es adulto"); }
else
    { console.log("El usuario no es adulto");

}
/*
 Conseguir la sumatoria del array de números primos usando algún tipo de loop e imprimir el resultado por consola "Sumatoria: [sum]".
 */

 let sum = 0;
 
 for (let index = 0; index < primes.length; index++) {
    sum += primes[index];
  
 }

 console.log("Sumatoria :", sum );
 

 
/* Definir una función que dado un radio calcule el perímetro y el área de una circunferencia */

function calcular(r) {
  const perimetro = 2* PI * r;
  const area = PI * r * r;
  console.log("Perimetro:", perimetro);
  console.log("Area:", area);
  return perimetro,area;

}

calcular(10); 

/* Exportar la función para poder usarla en otros archivos */


export { calcular };


