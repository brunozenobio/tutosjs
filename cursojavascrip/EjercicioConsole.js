
// a) |termino el primer semestre y cofla no sabe aprobara o no las materias, 
//para lograrlo necesitar:
// Contar con al menos el 90% de asistencia.

// E] promedio por materia debe ser de al menos 7 / 10.

// bebe tener al menos del 75% de los trabajos practicos entregados.

// - Solicitar los datos y decirle si aprueba o no.
// - Mostrar todo esto con colores representativos en consola (ej: no aprobar en rojo)
// - Todo esto estructurado como tabla
// 


const materias = {
    fisica :[90,6,3,"fisica"],
    historia :[76,5,2,"historia"],
    ciencia :[80,6,1,"ciencia"],
    economia :[54,7,4,"economia"],
    ingenieria :[94,5,2,"ingenieria"],
    tecnologia :[97,5,1,"tecnologia"],
    tecnologia2 :[100,6,4,"tecnologia2"],
    tecnologia3 :[70,2,2,"tecnologia3"],
    tecnologia4 :[46,3,2,"tecnologia4"],
    tecnologia5 :[64,5,3,"tecnologia5"]
}

const aprobacion = ()=>{
    for(materia in materias){
        let asistencias = materias[materia][0]
        let promedio = materias[materia][1]
        let trabajos = materias[materia][2]


        console.log(materias[materia][3]);
        if(asistencias >= 90){
            console.log("%c   Asistencias:bien","color:green");
            
        }else{
            console.log("%c   Faltaron asistencias","color:red");
        }
        if(promedio >= 7){
            console.log("%c   Promedio:bien","color:green");
        }else{ 
            console.log("%c   Promedio desaprobado","color:red");
        }
 
        if(trabajos >= 3){
            console.log("%c   Trabajos:bien","color:green");
        }else{
            console.log("%c   Trabajos desaprobados","color:red");
        }
        
    }  
}

aprobacion();




///
///
//

// b) cofla esta sufriendo un poco... ya que, a pesar de que cree contar con el 90% de asistencias
// y tener un prowedio mayor a 7 / 10, no cree entregar el 75% de trabajos practicos entregados ya
// que necesita dividir las tareas que hara semanaluente, cofla debe, trabar 8 horas por dia
// durante 2 semanas entre las cuales tiene que: 24 horas estudiar, 24 horas hacer trabajos
// practicos, 56 horas de trabajar 8 horas de hacer las cosas de la casa

 

// - Organizar las actividades diariamente
// ~ utilizar la consola para organizar todo.
// - el tiempo por tarea no debe superar las 4 horas
// 



//30 min cosas de la casa
//100 min trabajos practicos
//10 min descanso
//100 min estudio
//240 min trabajo


let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let descanso = "10 minutos de descanso";
let cosasDeLaCasa = "30 minutos de tareas de la casa";
let trabajosPracticos= "100 minutos de trabajos practicos";


console.log("tareas");

for(var i = 0;i<14;i++){
    if (i == 0) {
        console.group("semana 1");
        
    }
    console.groupCollapsed("dia ",(i + 1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(trabajosPracticos);
    console.log(cosasDeLaCasa);
    console.groupEnd();
    if (i == 7) {
        console.groupEnd();
        console.group("semana 2");

    }
}

console.groupEnd();



