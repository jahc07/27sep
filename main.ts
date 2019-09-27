/*se necesita realizar el siguiente problema usando programcion orientada a objetos 
se desea reralizar un sistema de venta de cursos online como por ej.: platzi, etc.
para ello se necesita interactuar con el estudiante, profesores de los mismos se necesita
registrar su informacion basica como nombre, apellido, correo, por otra parte se necesita
interacturar con los cursos que se imparten, por otra parte se necesita registrar
su precio, nombre, descripcion, fianlmente se desea guardar el nombre 
de los estudiantes que compraron algun curso. un estudiante o profesor puede tener
una o mas direcciones, al mismo tiempo una direccion esta compuesta por la siguiente
informacion: ciudad, barrio, calle. para los profesores en particular se necesita 
guardar su profesion*/

export class Curso {
    private nombre: string;
    private costo: number;
    private reserva: string;
    private direccion: string;

    public constructor(cur: string, est: number, fech: string, dir: string) {
        this.nombre = cur;
        this.costo = est;
        this.reserva = fech;
        this.direccion = dir;
    }
}
let Curso1: Curso = new Curso("programacion", 100, "hoy", "zona central")
console.log(Curso1);
export class Estudiante {
    private nombre: string;
    private apellido: string;
    private email: string;
    private direccion: string;

    public constructor(cur: string, ape: string, ema: string, dir: string) {
        this.nombre = cur;
        this.apellido = ape;
        this.email = ema;
        this.direccion = dir;
    }
}
let Estudiante1: Estudiante = new Estudiante("ale", "vismoke", "alevis@gmail.com", "z. central")
console.log(Estudiante1);

export class Docente {
    private nombre: string;
    private apellido: string;
    private email: string;
    private direccion: string;

    public constructor(cur: string, ape: string, ema: string, dir: string) {
        this.nombre = cur;
        this.apellido = ape;
        this.email = ema;
        this.direccion = dir;
    }
}
let Docente1: Docente = new Docente("master", "unique", "masuni@gmail.com", "wonder land")
console.log(Docente1);

export class Reserva {
    private curso: string;
    private estudiante: string;
    private fecha: string;


    public constructor(cur: string, est: string, fech: string) {
        this.curso = cur;
        this.estudiante = est;
        this.fecha = fech;
    }
}
let Reserva1: Reserva = new Reserva("programacion", "ale", "viernes 27")
console.log(Reserva1);
