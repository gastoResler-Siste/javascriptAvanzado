let numeros=[10,15,18,6,8,78,35];
let numeros1=[1,2,3,1,1,1,1];
function tp1Act1(){
   
//reducce es una funcion de Js
//SumAcumulativa es una variable que yo menciono para que se acumule ahi la suma del arreglo
//elem hace referencia a los elementos del arreglo
//0 es el valor de inicio

    suma = numeros.reduce((sumAcumulativa,elem) => sumAcumulativa + elem, 0);
    console.log("El resultado es: " + suma);
    alert("la suma es "  + suma )
}
//reducce es una funcion de Js
//SumAcumulativa es una variable que yo menciono para que se acumule ahi la suma del arreglo
//elem hace referencia a los elementos del arreglo
//0 es el valor de inicio

//suma = numeros.reduce((sumAcumulativa,elem) => sumAcumulativa + elem, 0);
//console.log("El resultado es: " + suma);
function tp1Act2(){
    suma = numeros1.reduce((sumAcumulativa,elem) => sumAcumulativa * elem, 1);
    console.log("El resultado es: " + suma);
    alert("la resultado es "  + suma )
}

function tp1Act3(){
    concat=numeros.reduce((acumulando,elem) => acumulando + '' + elem)
    alert (concat)
    console.log (concat)
}

function tp1Act4(){
    suma = numeros.reduce((sumAcumulativa,elem) => sumAcumulativa + elem, 0);
    suma=suma/numeros.length
    console.log("El promedio es: " + suma);
    alert("la promedio es "  + suma )
}

function tp1Act5(){
   //const suma = numeros.reduce((sumAcumulativa,elem) => elem > sumAcumulativa ? elem : sumAcumulativa , 0);
   const suma = numeros.reduce((sumAcumulativa,elem) => elem > sumAcumulativa ? elem : sumAcumulativa , 0);
   //suma=suma/numeros.length
    console.log("El mayor es: " + suma);
    alert("la mayor es "  + suma )
}
//const maximo = arregloBaseEnteros.reduce((acc, current) => current > acc ? current : acc, 0);


function tp1Act6(){
    

}