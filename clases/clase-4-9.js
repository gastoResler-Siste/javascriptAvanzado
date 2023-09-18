var numeros = [2,45,2,33,12];
/*let suma = 0;
for(let i = 0; i < numeros.length ; i++) {
  suma += numeros[i];
*/

 //
 
//reducce es una funcion de Js
//SumAcumulativa es una variable que yo menciono para que se acumule ahi la suma del arreglo
//elem hace referencia a los elementos del arreglo
//0 es el valor de inicio

suma = numeros.reduce((sumAcumulativa,elem) => sumAcumulativa + elem, 0);
console.log("El resultado es: " + suma);

