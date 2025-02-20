# ✨ Guía de JavaScript: Primitivos, Arreglos, Funciones, Arrow Functions, Objetos, Clases y Asincronismo

## 1. 💡 **Tipos Primitivos**
Los **tipos primitivos** en JavaScript son los valores más básicos. Se almacenan por valor.

### Principales tipos primitivos:
```js
let numero = 42; // Número
let texto = "Hola, mundo"; // String
let esVerdadero = true; // Booleano
let indefinido; // undefined (sin valor asignado)
let nulo = null; // null (ausencia de valor)
let simbolo = Symbol("descripcion"); // Símbolo (valor único e inmutable)
let bigInt = 9007199254740991n; // BigInt (números grandes)
```

---

## 2. 📏 **Arreglos y Métodos de Array**
Los **arrays** permiten almacenar múltiples valores en una sola variable.

### Ejemplo de un array:
```js
let frutas = ["Manzana", "Banana", "Naranja"];
console.log(frutas[0]); // "Manzana"
console.log(frutas.length); // 3
```

### Métodos comunes:
```js
frutas.push("Pera"); // Agrega al final
frutas.pop(); // Elimina el último
frutas.unshift("Mango"); // Agrega al inicio
frutas.shift(); // Elimina el primero
console.log(frutas.includes("Naranja")); // true
```

### Métodos de array importantes:
```js
// map - transforma los elementos
let numeros = [1, 2, 3, 4];
let cuadrados = numeros.map(num => num * num);
console.log(cuadrados); // [1, 4, 9, 16]

// filter - filtra elementos según una condición
let mayoresDeDos = numeros.filter(num => num > 2);
console.log(mayoresDeDos); // [3, 4]

// forEach - ejecuta una función para cada elemento
numeros.forEach(num => console.log(num * 2));

// reduce - acumula valores
let suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma); // 10
```

---

## 3. 💻 **Funciones**
Permiten encapsular código y ejecutarlo cuando sea necesario.

### Función tradicional:
```js
function saludar(nombre) {
  console.log("Hola", nombre);
}
saludar("Nina"); // "Hola Nina"
```

### Retorno de valores:
```js
function sumar(a, b) {
  return a + b;
}
let resultado = sumar(5, 10);
console.log(resultado); // 15
```

---

## 4. 🔍 **Funciones Flecha (Arrow Functions)**
Son una forma más corta de escribir funciones.

### Conversión de función tradicional:
```js
const getAleatorio = () => Math.random();
```

### Con parámetros:
```js
const sumar = (a, b) => a + b;
console.log(sumar(5, 10)); // 15
```

---

## 5. 🏗️ **Objetos y Clases**
Los objetos permiten almacenar múltiples valores relacionados.

### Ejemplo de un objeto:
```js
const persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function () {
    console.log("Hola, soy " + this.nombre);
  },
};
persona.saludar(); // "Hola, soy Juan"
```

### Clases y Herencia
```js
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hacerSonido() {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log("Guau guau"); // Polimorfismo (método redefinido)
  }
}

let miPerro = new Perro("Firulais");
miPerro.hacerSonido(); // "Guau guau"
```

### Encapsulamiento (Propiedades privadas)
```js
class CuentaBancaria {
  #saldo = 0; // Propiedad privada
  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }
  depositar(monto) {
    this.#saldo += monto;
  }
  obtenerSaldo() {
    return this.#saldo;
  }
}

let cuenta = new CuentaBancaria(1000);
console.log(cuenta.obtenerSaldo()); // 1000
```

---

## 6. ⏳ **Promesas y Async/Await**

Las **promesas** permiten manejar operaciones asincrónicas como peticiones a APIs o bases de datos.

### Creando una promesa:
```js
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Datos cargados");
  }, 2000);
});

promesa.then((mensaje) => console.log(mensaje)); // "Datos cargados" después de 2 segundos
```

### Async/Await (forma moderna de manejar promesas)
```js
async function obtenerDatos() {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error("Error al obtener los datos", error);
  }
}

obtenerDatos();
```

**Explicación:**
- `async` convierte una función en asincrónica, permitiendo el uso de `await` dentro de ella.
- `await` pausa la ejecución hasta que la promesa se resuelve.
- `try...catch` maneja errores.

---

## 📈 **Resumen**
| Concepto          | Descripción |
|------------------|------------|
| **Primitivos**   | Valores básicos (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigInt`). |
| **Arreglos**     | Colecciones indexadas. Métodos: `map`, `filter`, `forEach`, `reduce`, `push`. |
| **Funciones**    | Bloques reutilizables con `function` o `=>`. |
| **Objetos**      | Almacenan datos con `{ clave: valor }`. |
| **Clases**       | Plantillas para crear objetos con herencia y encapsulamiento. |
| **Promesas**     | Permiten manejar asincronía (`.then`, `.catch`). |
| **Async/Await**  | Sintaxis más limpia para promesas. |

---



