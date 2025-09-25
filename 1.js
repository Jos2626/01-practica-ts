"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let message = "Hi Baby";
console.log(message);
function TuEdad(edad) {
    console.log("Me llamo Josmeiry y tengo " + edad + "años");
}
TuEdad(17);
let numeros = [26, 29, 20]; //arreglo
console.log(numeros[1]); // o llamarlos a todos
for (let n of numeros) { //con un for ^
    console.log(n);
}
let persona = {
    nombre: "Jos",
    edad: 17
};
console.log(persona.nombre);
console.log(persona.edad);
const numFlecha = (a) => a * a; //no funciona 😔
let estudent = {
    nombre: "Jos",
    apellido: "Muñoz",
    edad: 17
};
console.log(estudent);
let t; //tupla , es igual que al arreglo solo que tiene una long exacta
t = ["Jos", 17];
console.log(t);
let suma = (a, b) => a + b;
console.log(suma(26, 29));
//# sourceMappingURL=1.js.map