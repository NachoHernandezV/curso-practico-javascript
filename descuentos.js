//const precioOriginal = 1000;
//const descuento = 15;

function CalcularprecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function CalcularDescuento(){
    const InputPrice= document.getElementById("InputPrice").value;
    const InputDiscount= document.getElementById("InputDiscount").value;

    const PrecioConDescuento = CalcularprecioConDescuento(InputPrice,InputDiscount);
    alert(PrecioConDescuento);
    document.getElementById("Resultado").innerText="El Precio con el descuento del "+InputDiscount+" %  es :"+ PrecioConDescuento;
}


/*const porcentajePrecioConDescuento = 100-descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;

console.log("El precio Original es :" + precioOriginal);

console.log("El precio Con Descuento es :" + precioConDescuento);

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});
*/