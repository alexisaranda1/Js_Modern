# ✨ Guía de JavaScript: Primitivos, Arreglos, Funciones, Arrow Functions y Objeto Literal

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

## 2. 📏 **Arreglos**
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

## 5. 📝 **Objeto Literal**
Los objetos permiten almacenar múltiples valores.

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

---

## 📈 **Resumen**
| Concepto          | Descripción |
|------------------|------------|
| **Primitivos**   | Valores básicos (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigInt`). |
| **Arreglos**     | Colecciones indexadas. Métodos: `push`, `pop`, `shift`, `unshift`. |
| **Funciones**    | Bloques reutilizables. Se pueden declarar con `function` o `=>`. |
| **Arrow Functions** | Sintaxis más corta, sin `this` propio. |
| **Objeto Literal** | Almacenan datos en `{ clave: valor }`. |

---

🔗 **Esta guía te ayudará a repasar los conceptos básicos de JavaScript!**

