/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

function letragrandechica (cadena){
    if (cadena === cadena.toUpperCase()) {
        return console.log ('Es Mayuscula')
    }
    else if (cadena === cadena.toLowerCase()) {
        return console.log ('Es Minuscula')
        }
    else
     {return console.log ('Es Mixta')}} ;


     let cadena = 'hola mundo';
     let resultado = letragrandechica (cadena);
     console.log (resultado);