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

console.log(platosSalados); 

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

console.log(miCompra) */

// DESAFIO CLASE 8

let divEntradas = document.querySelector('#entradas')
let divPlatosPrincipales = document.querySelector('#platosPrincipales')
let divPostres = document.querySelector('#postres')


const entradas = [
    {nombre: "Bruschetta", descripción: "Tostadas de pan de masa madre, aceite de oliva, sal, tomates y ajo", precio: 480, foto: "../Assets/Imagenes/bruschetta.png"}, 
    {nombre: "Burratta", descripción: "Fresca mozzarella de búfalo con tomates cherries confitados, pesto de albahaca y aceite de oliva", precio: 650, foto: "../Assets/Imagenes/burratta.png"}, 
    {nombre: "Caprese", descripción: "Clásica ensalada de mozzarella, tomates y albahaca, con aceite de oliva y reducción de aceto", precio: 700, foto: "../Assets/Imagenes/caprese.png"}, 
    {nombre: "Ensalada italiana", descripción: "Fresca ensalada con colchón de hojas verdes, tomates secos, queso en hebras y vinagre balsámica", precio: 520, foto: "../Assets/Imagenes/ensalada.png"}, 
    {nombre: "Ostras", descripción: "Ostras al horno con mantequilla de salvia y reducción de vino blanco", precio: 1200, foto: "../Assets/Imagenes/ostras.png"},
    {nombre: "Carpaccio de salmón", descripción: "Salmón ahumado servido en rodajas finas con aderezo cítrico, acompañado de hojas verdes", precio: 1100, foto: "../Assets/Imagenes/salmon.png"} 
]
const platosPrincipales = [
    {nombre: "Tagliatelle a la putanesca", descripción: "Tagliatelle con salsa de tomates, aceitunas negras, anchoas y alcaparras", precio: 670, foto: "../Assets/Imagenes/pastas.png"}, 
    {nombre: "Spaghetti frutti di mare", descripción: "Spaghetti con salsa ligeramente picante con langostinos, almejas y mejillones", precio: 850, foto: "../Assets/Imagenes/pasta-mariscos.png"}, 
    {nombre: "Gnocchis don Corleone", descripción: "Gnocchis de papa con salsa de tomate, tomates frescos y hojas de menta", precio: 710, foto: "../Assets/Imagenes/gnocchi.png"}, 
    {nombre: "Pizza serrana", descripción: "Pizza con salsa de tomate, prosciuttto, rúcula, queso de búfalo y aceite de oliva extra virgen", precio: 620, foto: "../Assets/Imagenes/pizza.png"}, 
    {nombre: "Risotto silvestre", descripción: "Risotto de tomate con espinacas salteadas, frutos de mar y huevo poché", precio: 680, foto: "../Assets/Imagenes/risotto.png"}, 
    {nombre: "Picatta de pollo", descripción: "Pechuga de pollo macerada en limón con cremoso de batata y reducción de jugo de cocción", precio: 730, foto: "../Assets/Imagenes/pollo.png"} 
]
const postres = [
    {nombre: "Tiramisú", descripción: "Cremoso pastel con notas de café y queso, a base de bizcocho de almendras y queso mascarpone", precio: 300, foto: "../Assets/Imagenes/tiramisu.png"},
    {nombre: "Cannoli", descripción: "Trío de cannolis rellenos de nutella con nueces, dulce de leche con almendras y ricota con pistachos", precio: 240, foto: "../Assets/Imagenes/cannoli.png"}, 
    {nombre: "Gelato", descripción: "Tradicional helado italiano de vainilla, chocolate, dulce de leche o crema, acompañado de frutos secos", precio: 200, foto: "../Assets/Imagenes/gelato.png"}, 
    {nombre: "Brownie", descripción: "Tibio brownie de chocolate bañado con salsa de chocolate o dulce de leche a elección", precio: 180, foto: "../Assets/Imagenes/brownie.png"}, 
    {nombre: "Cheesecake", descripción: "Cremosa torta de queso con base crujiente de galletitas, con mermelada de frutos rojos", precio: 250, foto: "../Assets/Imagenes/cheesecake.png"}, 
    {nombre: "Panna cotta", descripción: "Típico postre italiano elaborado a partir de crema y azúcar, acompañado de compota de frutos rojos", precio: 270, foto: "../Assets/Imagenes/pannacotta.png"}
]    
const bebidas = [
    {nombre: "Agua", precio: 80}, 
    {nombre: "Gaseosa", precio: 90}, 
    {nombre: "Cerveza", precio: 150}, 
    {nombre: "Café", precio: 100}, 
    {nombre: "Té", precio: 60}, 
    {nombre: "Limonada", precio: 250}, 
    {nombre: "Copa de vino", precio: 150}, 
    {nombre: "Botella de vino", precio: 850}, 
    {nombre: "Champagne", precio: 500} 
]

for (const entrada of entradas) {
    let div = document.createElement("div");
    div.innerHTML = `<img src=${entrada.foto} data-aos="fade-up" class="fotos--Menu img-fluid">
                    <h3 class="nombres--Platos">${entrada.nombre}</h3>
                    <h4 class="descripcion--Platos">${entrada.descripción} ($${entrada.precio})</h4>`;
                    divEntradas.appendChild(div)}

for (const platoPrincipal of platosPrincipales) {
    let div = document.createElement("div");
    div.innerHTML = `<img src=${platoPrincipal.foto} data-aos="fade-up" class="fotos--Menu img-fluid">
                    <h3 class="nombres--Platos">${platoPrincipal.nombre}</h3>
                    <h4 class="descripcion--Platos">${platoPrincipal.descripción} ($${platoPrincipal.precio})</h4>`;
                    divPlatosPrincipales.appendChild(div)}

for (const postre of postres) {
    let div = document.createElement("div");
    div.innerHTML = `<img src=${postre.foto} data-aos="fade-up" class="fotos--Menu img-fluid">
                    <h3 class="nombres--Platos">${postre.nombre}</h3>
                    <h4 class="descripcion--Platos">${postre.descripción} ($${postre.precio})</h4>`;
                    divPostres.appendChild(div)}


// DESAFIO CLASE 9

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    alert("Formulario Enviado");    
}

