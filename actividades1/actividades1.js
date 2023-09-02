
//5
//Red Social:
//Crea un objeto perfil que almacene propiedades como nombre,
// edad y amigos, que es un array de objetos donde cada objeto 
// representa un amigo con propiedades como nombre y edad. Agrega
// al menos tres amigos y muestra en la consola el nombre del amigo más joven.

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
console.log("el amigo mas joven " + mas_joven.nombre )
//ordenar
perfil.amigos.short((a,b)=>  a.edad - b.edad);
console.log(perfil.amigos[0])

