
 let contactos={   
    contacto:
        [ {  nombre:"conacto 1",
            mail:"sdfsdf@fds.com",
            telefocno:"2131313"}],
        
    nuevoContacto: function(name,email,tele){
        let nuevoo={
            nombre:name,
            mail:email,
            telefocno:tele
        }
        this.contacto.push(nuevoo)    
    }    
}
function acti2(){
    contactos.nuevoContacto(prompt("nombre") ,prompt("maill"),prompt("telefono"))
    console.log (contactos.contacto.length)

   let stringg=""
    for (let cont of contactos.contacto){
        console.log(cont.nombre + '   ' + cont.mail + '   ' + cont.telefocno)
    }

    console.log("la cantidad de Contactos es: " + contactos.contacto.length)
}
   //actividad 3
   
 let productos={   
    producto:
        [ { nombre:"Yerba Mate andresito",
            presentacion:"500Grs",
            cantidad:26,
            precio:700,
            disponible:true,
        }],
        
    nuevoArticulo: function(name,prs,price,cant){
        let nuevoitem={
            nombre:name,
            presentacion:prs,
            cantidad:cant,
            precio:price,
            disponible:true,
        }
        this.producto.push(nuevoitem)    
    },    
    buscarArticulo: function(name){


    }
}
   
function acti3(){
    productos.nuevoArticulo (prompt("nombre") , prompt("Presentacion"),prompt("Precio"),prompt("cantidad"))
    console.log (productos.producto.length)


    console.log("la cantidad de Articulos es: " + productos.producto.length)

}
   //------------------



    const usuario={
        nombre:"juan carlos",
        peliculaFavorita:[
            {
                titulo: "roky",
             año:1989
            }, 
             {
                titulo: "roky 1",
             año:1993
            }, 
             {
                titulo: "roky 2",
             año:1999
            }, 
        ]
    }
function acti1(){
    alert(usuario.nombre + '  ' + usuario.peliculaFavorita[1].titulo + ' (' + usuario.peliculaFavorita[1].año +')')
}



function acti5(){
    const perfil={
        nombre:"juan",
        edad: 45,
        amigos:[
            {
                nombre:"fsqweqweqwed",
                edad:"23"
            },
            {
                nombre:"fwsd",
                edad:"21"
            },
            {
                nombre:"gggggggfsd",
                edad:"27"
            },
        ]

    };//fin perfil

    let mas_joven=perfil.amigos[0];
    for(const amigo of perfil.amigos){
        if (mas_joven.edad>amigo.edad){
            mas_joven=amigo
        }
    }
    alert("el amigo mas joven " + mas_joven.nombre )
    //ordenar
    //perfil.amigos.short((a,b)=>  a.edad - b.edad);
   // console.log(perfil.amigos[0])

}//cierro la funcion Acti5




       
let calificaciones={
    datosAlumno:
        [ { nombre:"JUANNN",
        notaXmateria:[
            {
             materia: "Lengua",
             nota:8
            },
            {
                materia: "Historia",
                nota:9
               },
               {
                materia: "Matematica",
                nota:3
               }


            ]   
        }],
        agregarCalificacion: function (nombreAlum,mat1,nota1,mat2,nota2,mat3,nota3){
           let nuevaNota={
           nombre:nombreAlum,
           notaXmateria:[{
             materia: mat1,
             nota:nota1
            },{
            materia: mat2,
            nota:nota2
            },{
            materia: mat3,
            nota:nota3
            }]   
          }
          this.datosAlumno.push(nuevaNota)
       }
}
function acti4(){
    calificaciones.agregarCalificacion("Gaston","Fisica2",3,"historia4",7,"Geografia",5)
  calificaciones.agregarCalificacion("Beto","Fisica2",3,"historia4",7,"Geografia",5)
calificaciones.agregarCalificacion("Humberto","historia4",7,"Fisica2",3,"Geografia",5)

for (let alum of calificaciones.datosAlumno){
   let prome=0;
   let cantiNot=0;
   for(let notas of alum.notaXmateria ){
    cantiNot++
    prome=prome+notas.nota
   }
   prome=prome/cantiNot
   let cadena=alum.nombre + ' promedio: ' + prome
   console.log (cadena)
}

}

//de una clase para poner un nombre y 3 calificaciones
let clase={
    estudiantes:[], //arreglo de estudiantes
    agregarEstudiante: function (nombre,notas){
        let nuevoEstudiante={
            nombre:nombre,
            calificaciones:notas,
        };
        this.estudiantes.push(nuevoEstudiante);
    },

}

function calcularPromedios(calificaciones){
    let sumaParcial=0;
    let resultado=0;
    //verifico si esta vacio
    if (calificaciones!=undefined && calificaciones !=""){
        for(const nottta of calificaciones){
            sumaParcial+=nottta;
        }
        resultado=sumaParcial/calificaciones.length;
    }
    return resultado;
}


$(document).ready(function(){

    $(botonGuardar).ready()
    $(botonGuardar).click(function(){
        //$("#nota1").val
        let nombreAl=$("#nombre").val()
        //alert(nombreAl);
        if (nombreAl==''){
            alert("esa vacio");
            $("#nombre").css("background-color","yellow")
            //$("#nombre").show()
           // $("#nombre").hide()
        }else{
            $("#nombre").addClass("resalta")//le agregue un estilo ya definido y llamado "resala"
            alert("sf")}
      
            
        let nombre=texttt_nmbre; 
        let nota1=textNota1;   
        let nota2=textNota2;  
        let nota3=textNota3;  
        clase.agregarEstudiante(nombre,[nota1,nota2,nota3]);

        if(clase.estudiantes.length===3){
            //cuando llegue a 3 registros los mostrara
        }    

    })

    //boton VER promedios
    //inicializo la lista
    //listapromedios.innerHtml=""
    for (const estudiante of clase.estudiantes){
        let prome=calcularPromedios(estudiante.calificaciones);
        let listItem=document.createElement("li");
        listItem.textContent=estudiante.nombre + ": " + prome;
    }


})//fin $(document).ready(function(){
//acceder a al elemento
$("[name='elemento']").val()//selecciono el elemneto por el nombre en Jquery
$("#telefono").val()//accedo por el id
//produto_0 es el id del Div  + (esoacio) y '.nombre' es la clase del parrafo dentro
$("#producto_0 .nombre").text();// accedo al parrrafo dentro del Div

$("#contenedor").child("p").val()//todoss los parrafos dentro del contenedor
$("#contenedor").find("p").hide()//busca todod los parrafos y los oculta
