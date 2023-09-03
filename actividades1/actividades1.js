
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

}//cierro la funcion