//12
const elimiarElem = (array: number[]) => array.splice(2,1);

console.log(elimiarElem([1,2,3,4,5,6]));


//17
function index(array: string | any[], valor: any){
    return array.indexOf(valor);
}  
console.log(index([1,2,3,4],4));

//18
function joinS(array: any[]){
    return array.join("-");
}
console.log("Jos", "Maria","Muñoz");
  