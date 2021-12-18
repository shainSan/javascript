function descuento(valordeCompra)
{ 
    let valorFinal;
    if (valordeCompra < 100)
    { 
        valorFinal = valordeCompra * 0.9;
    }
    else if (valordeCompra >=100 && valordeCompra <200)
    {
        valorFinal = valordeCompra * 0.8;
    }
    else
    {
        valorFinal = valordeCompra * 0.7;
    }
    return valorFinal ;
}
    
let precioUsuario = parseInt(prompt("Ingresa el precio"));
let descuento1 = descuento(precioUsuario);
document.write ("<h1>" + "El precio final es" + descuento + "</h1>");
