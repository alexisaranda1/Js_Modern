"use strict";
// si te deja modificar los valores de las propiedades

const producto = {
    nombre: "Minitor",
    precio: 30,
    disponible: true,
}

Object.seal(producto) 

//producto.ano = 2024; // no se puede hacer 
//delete producto.precio; 
producto.nombre =  "celular";

console.log("Se Sello?: ",Object.isSealed(producto));


