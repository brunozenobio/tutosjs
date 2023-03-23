//C) Colla ya 10 las 12 materias y S decidió en cual se va a inscribir ast que en tres dias lo hará, el problems es que S rospio el sistema de inscripciones.
//CREAK SOLUCIONES:
//- Crear UnA función para prepuntarie A colla en que materia se quiere inscribir.
// Si ул hay 20 alianos anotados en la materia negarla la inscription.
 // si hay acnos de 20 alumos inscribir a cofla y añadirla a la lista de alumps.

   let  materias = {
        fisica:["Dr.Gutierrez","pedro","juan","bruno","tobias","marcos"],
        programacion:["Dr.Florencia","pedro","bruno","tobias"],
        matematica:["Licenciado Agustin","pedro","juan","bruno"],
        logica:["Dr.Perez","pedro","juan","tobias"]
    }

let inscribir = (alumno,materia)=>{
    personasTotal = materias[materia];
    if(personasTotal.length>= 5){
        document.write(`<b>${alumno}</b> no puede inscribirse a <b>${materia}</b> ya hay el cupo maximo de alumnos`)
    }else{
        personasTotal.push(alumno);
        if(materia=="fisica"){
            materias ={
            fisica:personasTotal,
            programacion:materias["programacion"],
            matematica:materias["matematica"],
            logica:materias[logica]
        }
        }else if(materia=="programacion"){
            materias = {
            programacion:personasTotal,
            fisica:materias["fisica"],
            matematica:materias["matematica"],
            logica:materias[logica]
        }
        }else if(materia=="matematica"){
            materias = {
            matematica:personasTotal,
            fisica:materias["fisica"],
            programacion:materias["programacion"],
            logica:materias[logica]
        }
        }else if(materia=="logica"){
            materias = {
            logica:personasTotal,
            fisica:materias["fisica"],
            programacion:materias["programacion"],
            matematica:materias["matematica"]
        }
        }
        document.write(`<b>${alumno}</b> se ha inscrito a <b>${materia}</b><br>`)

    }

}
document.write(materias["logica"])


inscribir("ramon","logica")

document.write(materias["logica"])