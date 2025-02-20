
function producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = precio;
}

const producto1 = new producto("television", 500);
console.log(producto1);

console.log( "keys",Object.keys(producto1));
console.log( "values",Object.values(producto1));
console.log( "entries",Object.entries(producto1));