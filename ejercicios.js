// function preguntar_helado(dinero){
//     if (dinero<0.5){document.write("No te alcanza para nada gato")}
//     else if(dinero>=0.5 && dinero<1){document.write("Comprate un napolitano")}
//     else{document.write("Traes mucho dinero wacho")}
// }
// dinero = prompt("Cuanto dinero tienes?");
// dinero = parseFloat(dinero)
// preguntar_helado(dinero)
// document.write(dinero)

const definirCompra = (n) => {
    let din = prompt(`Dinero de ${n}`);
    if (din >= 0.6 && din < 1) return (`${n}: helado de agua`);
    if (din >= 1 && din < 1.5) return (`${n}: helado de crema`);
    if (din >= 1.5 && din < 2) return (`${n}: helado de heladix`);
    if (din >= 2 && din < 2.5) return (`${n}: helado de helardo`);
    if (din >= 2.5) return (`${n}: super helado`);
    else return (`${n}: No te alcanza para nada gato`)
}

console.log(definirCompra("Cofia"))
console.log(definirCompra("Alan"))
console.log(definirCompra("Monroy"))


