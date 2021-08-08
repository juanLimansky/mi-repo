/* let nombre = prompt("Ingrese su nombre")
let edad = Number(prompt("Ingrese su edad"))

if (edad >= 18) {
    alert("Bienvenido/a " + nombre)
}
else if (edad > 0 && edad < 18) {
    alert("Lo siento " + nombre + ", no tiene la edad suficiente como para ingresar al sitio")
}
else {
    alert("El dato ingresado no es una edad")
} 

// DESAFÍO COMPLEMENTARIO CLASE 4

function pedido(){
    let plato = prompt("¿Qué plato desea ordenar?");
    alert("Usted ordenó " + plato);
} 
pedido();
pedido();
pedido();



// DESAFÍO CLASE 5

class Menu {
    constructor(entrada, principal, postre) {
        this.entrada = entrada;
        this.principal = principal;
        this.postre = postre;
    }
}
let pedido = prompt("¿Quiere hacer un pedido? si / no");

while (pedido != "no") {
    inputEntrada = prompt("Ingrese su entrada");
    inputPrincipal = prompt("Ingrese su plato principal");
    inputPostre = prompt("Ingrese su postre");

    const menu1 = new Menu (inputEntrada, inputPrincipal, inputPostre);

    console.log(menu1);

    pedido = prompt("¿Quiere hacer un pedido? si / no");
} 

// DESAFIO CLASE 6

const entradas = ["bruschetta", "burratta", "caprese", "ensalada", "ostras", "carpaccio"];

const principales = ["tagliatelle", "spaghetti", "gnocchi", "pizza", "risotto", "piccata"]

const platosSalados = entradas.concat(principales);

console.log(platosSalados); */

// PRIMERA ENTREGA PROYECTO FINAL

class Envio{
    constructor(plato, precio){
        this.plato = plato.toUpperCase(),
        this.precio = Number(precio)
    }
}

const pedido =[]

function baseDeDatos (){

let entrada = true

do{
    let plato = prompt("Ingrese el plato que desea ordenar")
    let precio = prompt("Ingrese el precio de su plato")

    let envio1 = new Envio(plato, precio)
    pedido.push(envio1)
    entrada = prompt("¿Quiere hacer otro pedido? s/n")
}while(entrada == "s");
}
baseDeDatos()
pedido.sort(function(a, b){
    return(a.precio - b.precio)
})

console.log(pedido)

let buscar = prompt("¿Qué plato quiere buscar?")
let miCompra = pedido.find(element => element.plato == buscar.toUpperCase())

console.log(miCompra)