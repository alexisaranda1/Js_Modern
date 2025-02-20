const arr = new Array(10);

const numeros = [32,1,3];

let cosas= [
    true,
    123,
    "string",
    2+12,
    ["Algo", "as", "we"]
];
console.log("todo el array",{cosas})
console.log("un indice del array que es otro array",cosas[4]);
console.log("Un elemento del array que esta dentro de cosas:",cosas[4][1]);
// metodos de los arrays
console.log("Largo:",cosas.length)
console.log("Ultimo Elemento:", cosas[cosas.length -1]);

cosas.forEach( (elemento,indice) =>{
    console.log("elemento:",elemento,"indice:",indice);
});

cosas.push("algo mas");
console.log("Nuevo ultimo Elemento:", cosas[cosas.length -1]);


cosas.unshift("inicio");
console.log("Nuevo primer elemento agregado",cosas[0]);

let borrado = cosas.pop();
console.log("Se elimino ultimo Elemento:", borrado);

cosas.splice(1,2);

console.log("se borraron 2 elementos desde el primer elemento")
cosas.forEach( (elemento,indice) =>{
    console.log("elemento:",elemento,"indice:",indice);
});


let indice = cosas.indexOf("string");
console.log("inde de string: ", indice)


for(let i=0; i< numeros.length; i++ ){
    console.log(numeros[i]);
}
numeros.push(4); // se agrega un elemento al final
numeros.unshift(0);// agrega al principio 
numeros.pop();// elimina el ultimo
numeros.shift();// elimina el primero

let n = 1;
let m = 1;

numeros.splice(n,m)// elimina desde n hasta m


const numerosDuplicados = numeros.map(numero => numero * 2);
console.log(numerosDuplicados);  // [2, 4, 6, 8, 10]
