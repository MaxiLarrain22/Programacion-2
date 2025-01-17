/* Dado un arreglo de números determinar cuál es el
mayor y mostrarlo, si existe el número cero una o más veces en el
arreglo también mostrar “Hay un cero”, pero una sola vez. Por ej.
=> [3, 4, ​0​, 3, ​0​, 9, ​12​, 5]
12
“Hay un cero”
=> [4, -4, 10, 23, 3, 4, 12, ​50​]
50   */
let listNumbers: number []= [3, 4, ​0​, 3, ​0​, 9, ​12​, 5];
let numMay: number = 0;
let message: string=' ';

for (let listNumber of listNumbers){
    if(listNumber > numMay){
        numMay = listNumber;
    }
    if(listNumber == 0){
        message= "Se encontro un cero";
    }
}
console.log(numMay + ' ' + message);