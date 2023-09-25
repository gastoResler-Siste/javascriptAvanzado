//clase 7   haciendo el carrito   lunes 18
//https://drive.google.com/file/d/159k3rQmnTefLI5kitDfYvcvKB1tqtW-r/view

class productos{
    constructor(name,price,stoki){
        this.nombre=name;
        this.precio=price;
        this.stock=stoki;
    }
    getInformacionProducto(){
        return "Nombre: " + this.nombre + " | Precio: " + this.precio + " | Stock: " + this.stock +  " ";
        }
}

class ProductoElectronico extends productos{
    constructor(name, price,stoki,pote){
        super(name, price,stoki);
        this.potencia=pote;
    }
    getPotencia(){
        return this.potencia;
    }
}

class productoAlimenticio extends productos{
    constructor(name,price,stoki,caduci,perece){
        super(name,price,stoki);
        this.vencimiento=caduci;
        this.perecedero=perece;
    }
    tipoAlimento(){
        let respuesta="";
        if (this.perecedero){
            respuesta=this.nombre + " es alimento Perecero";
        }else{
            respuesta=this.nombre + " el alimento NO es perecedero";
        }
        return respuesta;
    }
}



class carritoCompra {
    constructor(){
        this.listaProducto=[];
    }
    agregarProducto(prod){
        this.listaProducto.push(prod);
    }
    eliminaProducto(indice){
        this.listaProducto.splice(indice,1);
    }
    calcularTotal(){
        let tota=0;
        tota=this.listaProducto.reduce((sumar,elem)=>sumar+elem.precio,0)
        return tota;
    }
}

const listaCarrito=new carritoCompra();

function agregarAlCarrito(index){
                     // $("#producto_"+ index +" .nombre").text();
    let productoName =$("#producto_0 .nombre").text();
    alert(productoName);
}