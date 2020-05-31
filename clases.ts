class Persona {

    private nombre: string;
    private Apellido: string;

    constructor(nombre: string, Apellido: string) {
        this.nombre = nombre;
        this.Apellido = Apellido;
    }


    getNombre(): string {
        return this.nombre;
    }

    getApellido(): string {
        return this.Apellido;
    }

    static metodoEstatico(): number {
        return 10;
    }
}

let persona1 = new Persona("Juan", "Ramirez");
console.log(persona1.getNombre());
console.log(persona1.getApellido());
console.log(Persona.metodoEstatico());