let nombre = prompt ("Hola profe! por favor ingrese su nombre!");
let apellido = prompt ("Hola profe! por favor ingrese su apellido!");
let nombrecompleto = nombre+" "+apellido;

function saludaralprofe() {
    console.log ("Hola "+nombrecompleto+" espero que le guste mi trabajo")
}

saludaralprofe()

const alumno = {id:1, nombre: "Nicolas"} 
const alumnos = [alumno, {id:2, nombre:"Mariana"}]
alumnos.push ({id:3, nombre: "Camila"})

function mostrarlistadealumnos() {
    console.log (alumnos)
    alert("ojala todos aprueben")
}

mostrarlistadealumnos()

for(let i=0; i < alumnos.length; i++) {
console.log(alumnos[i])
}
