"use strict";
class Persona {
    constructor(nombre, Apellido) {
        if (Apellido == null) {
            Apellido = " Apellido no Ingresado";
        }
        this.nombre = nombre;
        this.Apellido = Apellido;
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.Apellido;
    }
    static metodoEstatico() {
        return 10;
    }
}
let persona1 = new Persona("Juan");
let persona2 = new Persona("Oscar", "Rodriguez");
console.log(persona1.getNombre() + persona1.getApellido());
console.log(persona2.getNombre() + persona2.getApellido());
console.log(Persona.metodoEstatico());
