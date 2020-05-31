'use strict';
let saludo = "!!!!TypeScript";
saludo = "Nuevo Saludo desde TypeScript";


let numero:number;//let numero = 10;
numero = 10;

let cualquiera: any;
cualquiera = "cadena";
cualquiera = 10;

let espacio: string;

espacio="esto es una prueba";

const PI_NUMERO = 3.14;

function saludar(){
    console.log(saludo,numero);
    console.log(PI_NUMERO);
}

saludar();