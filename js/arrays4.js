/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/



function paroimpar(numero) {
    if (numero % 2 === 0) {
        return console.log('El numero es par')
    }

    else { return console.log('El numero es impar') }
};


let numero = 7;
let resultado = paroimpar(numero);
console.log(resultado);