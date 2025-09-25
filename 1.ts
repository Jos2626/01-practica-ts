let message: string = "Hi Baby";
console.log(message);

function TuEdad(edad: number): any {//any cualquier cosa y void nada (devolver)
    console.log("Me llamo Josmeiry y tengo " + edad +"años")
}
TuEdad(17);

let numeros: number[]=[26,29,20];//arreglo

console.log(numeros[1]);// o llamarlos a todos

for (let n of numeros) {//con un for ^
    console.log(n);
}


let persona:{nombre: string, edad: number} = {//objeto
    nombre: "Jos",
    edad: 17
}

console.log(persona.nombre);
console.log(persona.edad);

const numFlecha = (a: 26): number => a * a;//no funciona 😔


interface Persona{ //interface se usa para que el cod sea ordenado y cute
    nombre: string;
    apellido: string;
    edad: number;
}
let estudent: Persona = {
    nombre: "Jos",
    apellido: "Muñoz",
    edad: 17
}

console.log(estudent);


let t: [string, number]; //tupla , es igual que al arreglo solo que tiene una long exacta
t = ["Jos", 17];

console.log(t);

let suma = (a: number, b: number) : number => a + b ;
console.log(suma(26,29));