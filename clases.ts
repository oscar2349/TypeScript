class Persona {

    private nombre: string;
    private Apellido?: any;

    constructor(nombre: string, Apellido?: string) {

        if (Apellido==null) {
            Apellido=" Apellido no Ingresado";
        }
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

let persona1 = new Persona("Juan");
let persona2 = new Persona("Oscar","Rodriguez");
console.log(persona1.getNombre()+ persona1.getApellido());
console.log(persona2.getNombre ()+ persona2.getApellido());
console.log(Persona.metodoEstatico());