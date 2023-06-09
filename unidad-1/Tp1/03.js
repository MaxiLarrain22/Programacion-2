"use strict";
/* Crear una función que calcule la nota final de una
materia. Recibe como parámetro un arreglo de números enteros
que representa la nota de cada TP, calcular y retornar el promedio
del alumno. */
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var nota = [];
var cantidadNota = parseInt(readlineSync.question("Ingrese la cantidad de notas a promediar:  "));
for (var i = 0; i < cantidadNota; i++) {
    var elemento = parseInt(readlineSync.question("Ingrese el elemento ${i+1}:  "));
    nota.push(elemento);
}
var suma = nota.reduce(function (acumulador, currentValue) { return acumulador + currentValue; }, 0);
function calcularPromedio(suma, cantidadNota) {
    var promedio = suma / cantidadNota;
    return promedio;
}
var promedioFinal = calcularPromedio(suma, cantidadNota);
console.log("Su promedio es : " + promedioFinal);
