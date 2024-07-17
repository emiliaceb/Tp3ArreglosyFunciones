/* 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y 
mostrar solo los resultados del 1 al 10 del número elegido por el usuario. */

const tabla = (numero) => {
    document.write(`<table>`);
    document.write(`<tbody>`);
    for(let i=1;i<11;i++){ //recorre por fila
        document.write(`<tr>`);
        document.write(`<td>${i} </td>`);
        document.write(`<td> ${i*numero} </td>`);
        document.write(`</tr>`);
    }
    document.write(`</table>`);
    document.write(`</tbody>`);
    
}

let numero = parseInt(prompt(`Ingrese un numero`))
if(!isNaN(numero) && numero != ''){
    document.write(`<h1> Tabla de multiplicar del numero ${numero} </h1>`);
    tabla(numero);
}else{
    alert(`El numero ingresado no es valido`);
}

