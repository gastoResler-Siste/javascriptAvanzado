//La tienda vendera productos que tendran propiedades como nombre, 
//precio y cantidad en stock. Incluye m�todos para mostrar la informaci�n
// del producto.

//Crea dos tipos de productos. Por ejemplo, puedes tener una clase 
//ProductoElectr�nico y una clase ProductoAlimenticio. 
//Cada clase hija debe tener propiedades espec�ficas 
//(por ejemplo, potencia para productos electr�nicos y fecha de caducidad
// para productos alimenticios) y m�todos relacionados con su tipo de 
//producto.

//Crea una clase llamada Carrito que tenga un array para almacenar los 
//productos seleccionados por el usuario. Esta clase debe incluir m�todos 
//para agregar un producto al carrito, eliminar un producto del carrito y 
//calcular el total de la compra.


class produto{
    constructor(nombre,precio,stock){
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }
    GetInformacionProducto(){
        return 'el producto es ' + this.nombre;
    }
}

//crear un producto nuevo
let prodNuevo=new produto("noretbook",150000,5)
prodNuevo.GetInformacionProducto;

class productoElectronico extends produto{
    constructor(nombre,precio,stock,potencia){
        super(nombre,precio,stock)
        this.potencia=potencia;
    }
    getPotencia(){
        return this.potencia
    }
}

let clie=[];
//aplicable a los estudiantes y sus 3 notas
function clientee(nombre,apellido,cuenta,deuda){
    this.nombre=nombre;
    this.apellido=apellido;
    this.cuenta=cuenta;
    this.deuda=deuda;
}

const juanPerez=new clientee("juan","pere",120,155522);
const juanPerez1=new clientee("juaness","perezz",122,5522);

clie.push (juanPerez);
clie.push (juanPerez1);