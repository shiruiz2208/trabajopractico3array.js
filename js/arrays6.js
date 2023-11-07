/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:


Input:
lado A = 24
lado B = 5

Output: 58 */

function perimetro(ladoA, ladoB) {
    return 2 * (ladoA + ladoB);
}

let ladoA = parseInt(prompt('Ingrese el primer valor'));
let ladoB = parseInt(prompt('Ingrese el segundo valor'));

if (!isNaN(ladoA) && !isNaN(ladoB)){
    let resultado = perimetro (ladoA,ladoB)
    document.write ('El perimetro es ' + resultado);
}
else {
    document.write ('Ingresa valor valido')
}
