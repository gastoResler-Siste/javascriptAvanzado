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

class productoElectronico extends productos{
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
    eliminaProducto(indec){
        this.listaProducto.splice(indec,1);
    }
    calcularTotal(){
        let tota=0;
        tota=this.listaProducto.reduce((sumar,elem)=>parseFloat( sumar) + parseFloat( elem.precio),0)
        return tota;
    }
}

const listaCarrito=new carritoCompra();

function agregarAlCarrito(index){
                     // $("#producto_"+ index +" .nombre").text();
    let productoName =$("#producto_"+index +" .nombre").text();
    let precioO=$("#producto_"+index +" .precio").text(); 
    //alert(productoName + precio);
  //if($("#producto_"+ index ).hasClass("electronico")) {
    if ($("#producto_"+ index).hasClass("producto electronico")){
        let poten=$("#producto_"+ index + " .potencia").text();
        let p1 = new productoElectronico(productoName,precioO,1,poten);
        listaCarrito.agregarProducto(p1);

    }else{
        let caducee=$("#producto_" + index + " .caducidad").text();
        let alimPere=true;  
        let p2= new productoAlimenticio(productoName,precioO,2,caducee,alimPere);
        listaCarrito.agregarProducto(p2);
       
    }
    mostrarCarro();
}

function mostrarCarro(){
    const listaCarrritoUl=$("#lista-carrito");
    const totalSpan=$("#total");
    listaCarrritoUl.empty();//esto limpia la Ul

    //listaCarrito nuevo objeto de la clase CarritoProducto
            //listaProducto variable del constructor de la clase carritoproducto
                      //prodLisCarro nombre que uso para mencionar a cada item de la listaProducto
    listaCarrito.listaProducto.forEach((prodLisCarro,index)=>{
        const lii=$("<li id='lili'>").text(prodLisCarro.getInformacionProducto());
       const elimarBtn=$("<button>").text("Eliminar Articulo");
        elimarBtn.click(()=>eliminarDelCarrito(index));

        lii.append(elimarBtn);
        listaCarrritoUl.append(lii);
    });//fin For EACH

    $("#cantidad").html("cantidad de productos: + " + listaCarrito.listaProducto.length + " total: "  + listaCarrito.calcularTotal());
   
    $("#cantidad").append("<p> Total</p>")
}   

function eliminarDelCarrito(index) {
    listaCarrito.eliminaProducto(index);
    
    mostrarCarro();
}

$(document).ready(function(){
       
    $("#lista-carrito li").click(function(){
        $(this).addClass("resaltado").siblings().removeClass("resaltado");
    })
    



    $("#lista-carrito").click(function(){
       // $(this).addClass("resaltado").siblings().removeClass("resaltado");
    })
    $("#lista-carrito").on("click","#li",function(){
         $(this).addClass("resaltado").siblings().removeClass("resaltado");
     })
   // $("#lista-carrito").click(function(){
   //     $("#lista-carrito").removeclass("resaltado");
    //    this.addClass("resaltado");
    //})
})