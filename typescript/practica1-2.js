var Name = "Jos";
var Age = 17;
var estaFrio = true; //or estaFrio = true
console.log(Name);
console.log(Age);
console.log(estaFrio);
var promedio = function (numeros) {
    var suma = 0;
    for (var i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
};
var promnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("El promedio es", promedio(promnum));
