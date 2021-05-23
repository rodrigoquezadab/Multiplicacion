"use strict";

let numero = 0;

//Funcion que se activa al hacer click en el boton de iniciar programa
let btm = document.getElementById("btn").addEventListener("click", function () {
  numero = 0;
  document.querySelector(".tabla").innerHTML = ``;
  numero = +prompt("Ingrese un número entre 1 y 20");
  //Verificacion de rango de los numeros ingresados
  while (numero > 20 || numero < 1) {
    numero = +prompt("Número fuera de rango, ingrese un número entre 1 y 20");
  }
  //Calculo de la multiplicacion de un numero
  for (let i = 1; i <= numero; i++) {
    document.querySelector(".tabla").innerHTML += `<li>${numero} x  ${i} = ${
      numero * i
    }</li><br>`;
    console.log(`${numero} x  ${i} = ${numero * i}`);
  }
  //Calculo factorial de numero
  for (let i = 1; i <= numero; i++) {
    let res = 1;
    for (let j = 1; j <= i; j++) {
      res = res * j;
    }
    document.querySelector(
      ".tabla"
    ).innerHTML += `<li>Factorial de ${i} es ${res}</li><br>`;
    console.log(`Factorial de ${i} es ${res}`);
  }
  numero = 0;
});
