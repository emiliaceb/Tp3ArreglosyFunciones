/* 4- Escribir el código de una función a la que se pasa como parámetro un número entero 
y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función. */

const parImpar = () => {
    if(numero % 2 === 0){
        document.write(`El numero ingresado es PAR`)
    }
    else{ document.write(`El numero ingresado es IMPAR`)}

}
 let numero = parseInt(prompt(`Ingrese un numero ENTERO: `));
 if(!isNaN(numero)){
    parImpar();
 }
 else{
    alert(`ERROR. Numero invalido`)
 }

