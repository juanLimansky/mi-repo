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

// DESAFÍO CLASE 4

function pedido(){
    let plato = prompt("¿Qué plato desea ordenar?");
    alert("Usted ordenó " + plato);
} 
pedido();
pedido();
pedido();
*/


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

