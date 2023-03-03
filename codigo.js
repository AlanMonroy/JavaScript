/*alert("hola")
*/
//Codigo inicial

/*let numero1 = 1, numero2 = 2, numero3 = 3;
const pi = 3.1416;
let respuesta = prompt("Hola, como estas?")
*/
// let es para declaracion por bloques y 
// var para declaracion global 

// Manejo de string y enteros
let numero = 15;
sumar_numero = prompt("Cuanto quieres sumarle a numero?");
numero += parseInt(sumar_numero);
document.write(numero);
nombre = "Alan"

// Uso de comilla invertida para mejor manejo de string
saludar = `Hola ${nombre}, bienvenido al mundo de desarrollo`
document.write(saludar);
// ``````` Usar FN + ESC para escribir comilla invertida

document.getElementById("New").onclick = function() {mi_funcion()};
function mi_funcion() {
    console.log("Adios a todos")
}