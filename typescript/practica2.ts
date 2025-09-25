//1
const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
// : 1

map1.set("a", 29);

console.log(map1.get("a"));
// : 29


//2
const numeros = [1, 2, 3, 4, 5, 6];

const numerosPares = numeros.filter(function(numero) {
  // La función callback (pasa los numeros(parametros) hacia numeros pares devuelve true si el número es par
  return numero % 2 === 0;
});

console.log(numerosPares); // Salida: [2, 4, 6]


//3 
const numSuma = [1, 2, 3, 4, 5];
const sumaTotal = numSuma.reduce((acumulador, numero) => acumulador + numero, 0); 


//4
function encontrarMayor50(array: any[]) {
    return array.find((nums: number) => nums > 50);
  }
  
  // Ejemplo:
  console.log(encontrarMayor50([10, 20, 55, 70])); // 55
  
  
  const hayNegativos = (arrays: any[]) => arrays.some((numb: number) => numb < 0);
  
  // Ejemplo:
  console.log(hayNegativos([3, -1, 7])); // true
  
  
  function todosMayores10(arrai: any[]) {
    return arrai.every((nuM: number) => nuM > 10);
  }
  
  // Ejemplo:
  console.log(todosMayores10([11, 20, 15])); // true
  console.log(todosMayores10([5, 20, 15]));  // false
  
  
  const contieneValor = (arra:  any[], valor: number) => arra.includes(valor);
  
  // Ejemplo:
  console.log(contieneValor([1, 2, 3], 2)); // true
  
  
  function ordenarStrings(aray: any[]) {
    return aray.sort();
  }
  
  // Ejemplo:
  console.log(ordenarStrings(["pera", "manzana", "banana"]));
  // ["banana", "manzana", "pera"]
  
  
  const invertirArray = (arrray: any[]) => arrray.reverse();
  
  // Ejemplo:
  console.log(invertirArray([1, 2, 3])); // [3, 2, 1]
  
  
  function primerosCinco(arrayy: string | any[]) {
    return arrayy.slice(0, 5);
  }
  
  // Ejemplo:
  console.log(primerosCinco([1, 2, 3, 4, 5, 6, 7])); // [1, 2, 3, 4, 5]
  
  
  function unirArrays(j: number[], l: number[]) {
    return j.concat(l);
  }
  
  // Ejemplo:
  console.log(unirArrays([1, 2], [3, 4])); // [1, 2, 3, 4]
  
  
  const llenarCeros = () => Array(5).fill(0);
  
  // Ejemplo:
  console.log(llenarCeros()); // [0, 0, 0, 0, 0]
  
  
  function primerCaracter(text: string) {
    return text.charAt(0);
  }
  
  // Ejemplo:
  console.log(primerCaracter("Hola")); // "H"
  
  
  const contienePalabra = (testo: string | any[], palabra: string) => testo.includes(palabra);
  
  // Ejemplo:
  console.log(contienePalabra("Me gusta programar", "programar")); // true
  
  
  const terminaEnCom = (textoo: string) => textoo.endsWith(".com");
  
  // Ejemplo:
  console.log(terminaEnCom("google.com")); // true
  
  
  
  
  function convertirMayusculas(texts: string) {
    return texts.toUpperCase();
  }
  
  // Ejemplo:
  console.log(convertirMayusculas("hola")); // "HOLA"
  
  
  const convertirMinusculas = (teto: string) => teto.toLowerCase();
  
  // Ejemplo:
  console.log(convertirMinusculas("HOLA MUNDO")); // "hola mundo"
  
  
  function quitarEspacios(tex: string) {
    return tex.trim();
  }
  
  // Ejemplo:
  console.log(quitarEspacios("   hola   ")); // "hola"
  
  
  
  const repetirPalabra = (word: string) => word.repeat(3);
  
  // Ejemplo:
  console.log(repetirPalabra("hola ")); // "hola hola hola "
  
  
  function reemplazar(palabras: string ) {
    return palabras.replace("malo", "bueno");
  }
  
  // Ejemplo:
  console.log(reemplazar("El día es malo")); // "El día es bueno"
  
  
  const dividirPalabras = (oracion: string) => oracion.split(" ");
  
  // Ejemplo:
  console.log(dividirPalabras("Me gusta programar"));
  // ["Me", "gusta", "programar"]
  
  
  
  function numeroMayor(...numero: number[]) {
    return Math.max(...numero);
  }
  
  // Ejemplo:
  console.log(numeroMayor(5, 10, 3)); // 10
  
  
  const numeroMenor = (...numer: number[]) => Math.min(...numer);
  
  // Ejemplo:
  console.log(numeroMenor(5, 10, 3)); // 3
  
  
  function redondear(numsb: number) {
    return Math.round(numsb);
  }
  
  // Ejemplo:
  console.log(redondear(4.6)); // 5
  
  
  const redondearAbajo = (numbers: number) => Math.floor(numbers);
  
  // Ejemplo:
  console.log(redondearAbajo(4.9)); // 4
  
  
  function redondearArriba(numberss: number) {
    return Math.ceil(numberss);
  }
  
  // Ejemplo:
  console.log(redondearArriba(4.1)); // 5
  
  
  const numeroAleatorio = () => Math.random();
  
  // Ejemplo:
  console.log(numeroAleatorio()); // Ejemplo: 0.3521
  
  
  function raizCuadrada(nums: number) {
    return Math.sqrt(nums);
  }
  
  // Ejemplo:
  console.log(raizCuadrada(25)); // 5
  
  
  
  const elevar = (base: number, exponente: number) => Math.pow(base, exponente);
  
  // Ejemplo:
  console.log(elevar(2, 3)); // 8
  
  
  function valorAbsoluto(numerA: number) {
    return Math.abs(numerA);
  }
  
  // Ejemplo:
  console.log(valorAbsoluto(-10)); // 10
  
  
  function noEsNumero(valorr: any) {
    return isNaN(valorr);
  }
  
  // Ejemplo:
  console.log(noEsNumero("hola")); // true
  console.log(noEsNumero(123));   // false
  
  
  const convertirEntero = (textoss: string) => parseInt(textoss);
  
  // Ejemplo:
  console.log(convertirEntero("123")); // 123
  
  
  function convertirDecimal(textss: string) {
    return parseFloat(textss);
  }
  
  // Ejemplo:
  console.log(convertirDecimal("3.14")); // 3.14
  
  
  