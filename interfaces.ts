interface Usuario { //declaracion de la interfaz
    nombreUsuario: string;
    password: string;
    confirmarPassword?: string;
}

//uso de la interfaz
let usuario1: Usuario = { nombreUsuario: "Juan", password: "1234" };

console.log(usuario1);
console.log(usuario1.nombreUsuario);

/*================Implementando los metodos de la interfaz ===================*/
interface Abordar {
    abordarTransporte(): void;
}

let avion: Abordar = {
    abordarTransporte: function () {
        console.log("abordando");
    }
}

avion.abordarTransporte();

/*==============================*/
interface Cambiar {
    Transporte(Valor: string): void;
}

let OtraInterfaz: Cambiar = {
    Transporte: function (prueba:string) {// se implementa el metodo declarado

        console.log( `${prueba} Otra interfaz`);
    }
}

OtraInterfaz.Transporte("Ejemplo");



