"use strict";
// se congela tal cual esta no se puede modificar nada

const producto = {
    nombre: "Minitor",
    precio: 30,
    disponible: true,
}

Object.freeze(producto)

//producto.ano = 2024; // no se puede hacer 
//delete producto.precio; 


console.log("Se congelo?: ",Object.isFrozen(producto));