// Solicitar 3 números

let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let num3 = Number(prompt("Ingresa el tercer número:"));


let mayor;
let centro;
let menor;


// Ver si los números son iguales

if (num1 === num2 && num2 === num3) {

    console.log("Los tres números son iguales");


} else {


    // Encontrar el número mayor

    if (num1 >= num2 && num1 >= num3) {

        mayor = num1;

    } else if (num2 >= num1 && num2 >= num3) {

        mayor = num2;

    } else {

        mayor = num3;

    }


    // Encontrar el número menor

    if (num1 <= num2 && num1 <= num3) {

        menor = num1;

    } else if (num2 <= num1 && num2 <= num3) {

        menor = num2;

    } else {

        menor = num3;

    }


    // Encontrar el número del centro

    centro = num1 + num2 + num3 - mayor - menor;


    // Mostrar resultados

    console.log("Orden de mayor a menor:");
    console.log(mayor, centro, menor);


    console.log("Orden de menor a mayor:");
    console.log(menor, centro, mayor);

}