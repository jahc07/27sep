"use strict";
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
exports.__esModule = true;
var Curso = /** @class */ (function () {
    function Curso(cur, est, fech, dir) {
        this.nombre = cur;
        this.costo = est;
        this.reserva = fech;
        this.direccion = dir;
    }
    return Curso;
}());
exports.Curso = Curso;
var Curso1 = new Curso("programacion", 100, "hoy", "zona central");
console.log(Curso1);
var Estudiante = /** @class */ (function () {
    function Estudiante(cur, ape, ema, dir) {
        this.nombre = cur;
        this.apellido = ape;
        this.email = ema;
        this.direccion = dir;
    }
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var Estudiante1 = new Estudiante("ale", "vismoke", "alevis@gmail.com", "z. central");
console.log(Estudiante1);
var Docente = /** @class */ (function () {
    function Docente(cur, ape, ema, dir) {
        this.nombre = cur;
        this.apellido = ape;
        this.email = ema;
        this.direccion = dir;
    }
    return Docente;
}());
exports.Docente = Docente;
var Docente1 = new Docente("master", "unique", "masuni@gmail.com", "wonder land");
console.log(Docente1);
var Reserva = /** @class */ (function () {
    function Reserva(cur, est, fech) {
        this.curso = cur;
        this.estudiante = est;
        this.fecha = fech;
    }
    return Reserva;
}());
exports.Reserva = Reserva;
var Reserva1 = new Reserva("programacion", "ale", "viernes 27");
console.log(Reserva1);
