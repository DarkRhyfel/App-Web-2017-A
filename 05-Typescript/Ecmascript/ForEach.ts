/**
 * Created by poli_ on 29/5/2017.
 */

let arregloNumeros = [1,2,3,4,5];

let resultado = arregloNumeros.forEach((valor, indice, arreglo) => {
    console.log("El valor es " + valor);
    console.log("El índice es " + indice);
    console.log("El arreglo es " + arreglo);
});

console.log(resultado);