/*
Coleccion de elementos 
Tienen metodos o funciones que nos permiten ordenar o manupular los datoa almacenados 
FORMA DE AGRUPAR INFORMACION Y DATOS 
Se puede agregrar arreglos en los arreglos 
*/
// manera 1
const arreglo1 =[3, "hola", true,[1, 3, 5,]];
console.log(arreglo1);

//manera 2
const arreglo2 = Array.of (1, "hola", true);
console.log(arreglo2);

//manera3
const arreglo3 = new Array (3, true, "adios");

console.log(arreglo3);

const frutas = ["manzana", "naranja", "uvas", "sandia",[1, 2, 3, 4, ["A", "B", "C", "D"]]];
//notacion de corchetes //
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[4][4]);
console.log(frutas[4][5][1]);
console.log(frutas);

// Metodos 
/*Length = longitud */
const letras = ["A", "B", "C", "D"];
console.log(letras,length);

/*push = añade un elmento al final de nuestro arreglo*/ 
letras.push ("E");
console.log(letras);

/*pop = elemina el ultimo elmento*/
letras.pop ();
console.log(letras);

/*unshift = agrega un elemto al inicio */
letras.unshift()
console.unshift(letras);

/*shift = elimina el primer elemeto */
letras.shift();
console.log(letras);