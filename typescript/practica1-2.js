"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Name = "Jos";
let Age = 17;
let estaFrio = true; //or estaFrio = true
console.log(Name);
console.log(Age);
console.log(estaFrio);
//funcion flecha
const promedio = (numeros) => {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
};
let promnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("El promedio es", promedio(promnum));
let numero = [];
for (let j = 0; j < 2; j++) {
    let resp = prompt("Ingresa un numero");
    if (resp) {
        numero.push(Number(resp));
    }
}
if (numero) {
    console.log("si existe");
}
else {
    console.log("no existe");
}
//# sourceMappingURL=practica1-2.js.map