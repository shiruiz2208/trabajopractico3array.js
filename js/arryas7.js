/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/

function multiplicar(numero) {
    for ( let i = 0; i <= 10; i++) {
        const resultado = numero * i 
        document.write(`${numero}*${i} =  ${resultado}<br>`)
    }

};

let numero = parseInt(prompt('Ingrese numero valido'))

multiplicar(numero);