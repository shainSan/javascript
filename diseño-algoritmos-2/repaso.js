
/* else
 funcion bloque de codigo reutilizable 
 palara reservada(parametros)
 {return}
 nombre (argumentos);
 */
function procesadorDeFrutas(manzanas,naranjas){
    let jugo = "jugo de" + manzanas + "manzanas y " + 
    naranjas + "naranjas." ;
    return jugo;
}
let jugoDeManzana = procesadorDeFrutas (4, 0);
console.log(jugoDeManzana);

let jugoDeNaranja = procesadorDeFrutas (0, 5);
console.log(jugoDeNaranja);
