"use strict";
class Persona {
    constructor(nombre, Apellido) {
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
let persona1 = new Persona("Juan", "Ramirez");
console.log(persona1.getNombre());
console.log(persona1.getApellido());
console.log(Persona.metodoEstatico());
