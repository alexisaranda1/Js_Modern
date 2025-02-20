const producto = {
    nombre: "Minitor",
    precio: 30,
    disponible: true,
}
producto.ano = 2024
console.log("producto: ", producto.nombre );
console.log("producto año: ", producto.ano );

delete producto.ano; // se elimina la propiedad 

console.log("producto año: ", producto.ano );// no existe


const productoDos = {
    nombre: "Minitor",
    precio: 30,
    disponible: true,
    informacion: {
        medidas: { 
        peso: "1kg",
        medida: "1m"
    },
    fabricacion: {
        pais: "arg",
    },
    }
}
  


console.log("pais: ", productoDos.informacion.fabricacion.pais);