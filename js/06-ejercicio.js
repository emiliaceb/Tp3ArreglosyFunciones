/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
 luego crear una función para calcular su perímetro y mostrarlo por pantalla.*/

 const calcularPerimetro = (lado1,lado2) => {

    let perimetro = lado1*2 + lado2*2
    return perimetro;
    
 }

 let lado1 = parseInt(prompt(`Ingrese un lado del rectangulo`));
 let lado2 = parseInt(prompt(`Ingrese el otro lado del rectangulo`));
 if(!isNaN(lado1) && lado1 !==''){
    if(!isNaN(lado2) && lado2 !==''){
      let perimetro = calcularPerimetro(lado1,lado2);
      document.write(`El perimetro es ${perimetro}`);
    }else{
        alert(`el lado 2 ingresado no es valido`)
    }
 }else{
    alert(`El lado 1 ingresado no es valido`)
 }
