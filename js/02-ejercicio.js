/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y 
almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, 
luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'*/

const ciudades = [];
let i= 0; 

do{
  ciudad = prompt('Ingrese el nombre de una ciudad');

  if(ciudad != null && ciudad != ''){
    ciudades[i] = ciudad
    console.log(ciudades[i])
    i++
  }
  else{
    alert('Ingrese un nombre de ciudad valido')
  }
}
while(confirm('Desea continuar?'));

document.write(`<p> El arreglo de Ciudades tiene ${ciudades.length} elementos`);
document.write(`<ul>`)
document.write(`<li> Elemento 1ra posicion: ${ciudades[0]}`)
document.write(`<li> Elemento 3ra posicion: ${ciudades[2]}`)
document.write(`<li> Elemento ultima posicion: ${ciudades[ciudades.length-1]}`)
document.write(`</ul>`)
ciudades.push('Paris');
document.write(`<li> Elemento ultima posicion: ${ciudades[ciudades.length-1]}`)

document.write(`<h1> Lista de Ciudades </h1>`);
document.write(`<ul>`)
for(let i=0; i<ciudades.length;i++){
  document.write(`<li> ${ciudades[i]} </li>`)
}
document.write(`</ul>`)
