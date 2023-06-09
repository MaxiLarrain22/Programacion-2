/* Crear una función que calcule la nota final de una
materia. Recibe como parámetro un arreglo de números enteros
que representa la nota de cada TP, calcular y retornar el promedio
del alumno. */

import* as readlineSync from 'readline-sync';

const nota:number[]=[];

const cantidadNota= parseInt(readlineSync.question("Ingrese la cantidad de notas a promediar:  "));

for (let i =0; i < cantidadNota; i++){
    const elemento = parseInt(readlineSync.question("Ingrese el elemento"));
    nota.push(elemento);
}

const suma= nota.reduce((acumulador,currentValue)=> acumulador + currentValue,0);

function calcularPromedio(suma:number,cantidadNota:number):number{
    const promedio= suma / cantidadNota;
    return promedio;
}
let promedioFinal: number= calcularPromedio(suma,cantidadNota);
console.log ("Su promedio es : " + promedioFinal);