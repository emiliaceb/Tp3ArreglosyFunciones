/* 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
 sólo por minúsculas o por una mezcla de ambas. */

 const tipoCadena = (cadena) => {
    let cadenaSinEspacios = cadena.trim()
    let tieneMayuscula = false;
    let tieneMinuscula = false;

    for(let i=0; i<cadenaSinEspacios.length ;i++){
      if (cadenaSinEspacios[i] === cadenaSinEspacios[i].toUpperCase() && isNaN(cadenaSinEspacios[i])){
         tieneMayuscula = true;
      }
      if(cadenaSinEspacios[i] === cadenaSinEspacios[i].toLowerCase() && isNaN(cadenaSinEspacios[i])){
         tieneMinuscula = true;
      }
    }

   if(tieneMayuscula && tieneMinuscula){
      document.write(`La cadena esta formada por una mezcla de Mayusculas y Minusculas`)
   }
   else{
      if(tieneMayuscula){
         document.write(`La cadena ingresada solo esta formada por letras Mayusculas`)
      }else{
         if(tieneMinuscula){
            document.write(`La cadena ingresada esta formada solo por letras Minusculas`)
         }
      }
   }
   

 }

 let cadena = prompt(`Ingrese una cadena`);
 tipoCadena(cadena);