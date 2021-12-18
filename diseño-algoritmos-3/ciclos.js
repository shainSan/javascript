/*
Ciclos - Bucles -Loops

while 
do while 
for 

*/
// while 
/*
let condicion = 1;  valor inicial 

while (condicion ){ 
    tu codigo 
    modificacion a nuestro valor inicial 

}
*/ 
// imprimir los numeros de 1 al 10 
/*let condicion = 1;
 while(condicion <= 10){
console.log (condicion);
//condicion = condicion + 1;
condicion++;
 }
/*let numero = 1;
console.log(numero);
numero++;
console.log(numero);
numero++;
console.log(numero);
numero++;
console.log(numero);
numero--;
console.log(numero);
numero--;
console.log(numero);
numero--;
console.log(numero);
*/

/*
do while 
*/
// let numero = 11;
/*do {
    console.log (numero );
    numero++;

}
while(numero <=10 ); */

/*
for 
*/
/* 
for(let control = 1; control <= 10; control++) {
console.log(control);
}
*/

const comida =["pozole", " tacos", "tamales", "tortas"];

for (let i= 0; i < comida.length; i++) {
    console.log(comida[i]);
    // si se pone [i] imprie cada uno de los elementos en individual //
}