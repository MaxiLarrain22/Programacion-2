/* Dados 2 arreglos de números enteros de la misma
longitud, obtener un nuevo arreglo a partir de la suma de los
elementos de ambos arreglos en la misma posición, y mostrar el
arreglo resultante. Por ej.
=> [3, 4, 0, 3, 12, 2]
[2, 9, 0, 5, 22, 14]
[-1, 5, 0, 2, 10, 12] */
const dato1: number[]=[2, 9, 0, 5, 22, 14];
const dato2: number[]=[-1, 5, 0, 2, 10, 12];
const sumaResultado: number[]= sumaDeArrays(dato1,dato2);

function sumaDeArrays (dato1:number[], dato2:number[]): number[]{
    const resultado:number[]=[];

    for(let i = 0; i < dato1.length;i++){
        const suma= dato1[i] + dato2[i];
        resultado.push(suma);
    }
    return resultado;
}

console.log (sumaResultado);



