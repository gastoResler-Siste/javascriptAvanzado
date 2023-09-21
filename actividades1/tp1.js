let numeros=[10,15,18,6,8,78,35];
function tp1Act1(){
    
}
//reducce es una funcion de Js
//SumAcumulativa es una variable que yo menciono para que se acumule ahi la suma del arreglo
//elem hace referencia a los elementos del arreglo
//0 es el valor de inicio

suma = numeros.reduce((sumAcumulativa,elem) => sumAcumulativa + elem, 0);
console.log("El resultado es: " + suma);
