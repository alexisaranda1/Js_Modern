function saludar(nombre){
 console.log("Hola",nombre);
}

const saludarFelcha = () =>{
console.log("Saludar flecha");
}

const saludarFelcha2 = (nombre) =>{
    console.log("Saludar flecha 2: ", nombre);
}

function sumar(numeroUno, numeorDos){
    return numeroUno + numeorDos;
}
const sumar2= (numeroUno,numeorDos) => numeroUno + numeorDos


function getAleatorio(){
    return Math.random();
}
const getAleatorio2 = ()=> Math.random();

let nombre = "Nina";
saludar(nombre);

saludarFelcha();
saludarFelcha2(nombre);

console.log(sumar(2,5));
console.log(sumar2(5,5));

console.log(getAleatorio());
console.log(get)