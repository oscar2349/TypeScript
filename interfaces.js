"use strict";
//uso de la interfaz
let usuario1 = { nombreUsuario: "Juan", password: "1234" };
console.log(usuario1);
console.log(usuario1.nombreUsuario);
let avion = {
    abordarTransporte: function () {
        console.log("abordando");
    }
};
avion.abordarTransporte();
let OtraInterfaz = {
    Transporte: function (prueba) {
        console.log(`${prueba} Otra interfaz`);
    }
};
OtraInterfaz.Transporte("Ejemplo");
