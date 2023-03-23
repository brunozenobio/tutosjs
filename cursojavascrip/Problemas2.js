//CAlculadora

class calculadora{
    constructor(){

    }
sumar(num1,num2){
    return parseInt(num1) + parseInt(num2)
}
restar(num1,num2){
    return parseInt(num1) - parseInt(num2)
}
dividir(num1,num2){
    return parseInt(num1) / parseInt(num2)
}
multiplicar(num1,num2){
    return parseInt(num1) * parseInt(num2)

}
potencia(num1,num2){
    return Math.pow(num1,num2)
}
}

const Calculadora = new calculadora();

alert("Que operacion desea realizar");
let operacion = prompt("1:suma ,2:resta ,3:dividir ,4:multiplicar , 5:potenciar ,6:raiz cuadrada ,7: raiz cubica");

if (operacion == 1){
    let num1 = prompt("Ingrese el primer numero");
    let num2 = prompt("Ingrese el segundo numero");
    let resultado = Calculadora.sumar(num1,num2);
    alert(resultado);
}else if (operacion == 2){
    let num1 = prompt("Ingrese el primer numero");
    let num2 = prompt("Ingrese el segundo numero");
    let resultado = Calculadora.restar(num1,num2);
    alert(resultado);
}else if (operacion == 3){
    let num1 = prompt("Ingrese el primer numero");
    let num2 = prompt("Ingrese el segundo numero");
    let resultado = Calculadora.dividir(num1,num2);
    alert(resultado);
}else if (operacion == 4){
    let num1 = prompt("Ingrese el primer numero");
    let num2 = prompt("Ingrese el segundo numero");
    let resultado = Calculadora.multiplicar(num1,num2);
    alert(resultado);

}else if (operacion == 5){
    let num1 = prompt("Ingrese el primer numero");
    let num2 = prompt("Ingrese el exponente de la potencia");
    let resultado = Calculadora.potencia(num1,num2);
    alert(resultado);
}else if (operacion == 6){
    let num1 = prompt("Ingrese el primer numero");
    let resultado = Math.sqrt(num1);
    alert(resultado);
}else if (operacion == 7){
    let num1 = prompt("Ingrese el primer numero");
    let resultado = Math.cbrt(num1);
    alert(resultado);
}






//funcion materia profesor estudiantes

const obtenerInfo = (materia)=>{
    materias = {
        fisica:["Dr.Gutierrez","pedro","juan","bruno","tobias","marcos"],
        programacion:["Dr.Florencia","pedro","bruno","tobias"],
        matematica:["Licenciado Agustin","pedro","juan","bruno"],
        logica:["Dr.Perez","pedro","juan","tobias"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    }else{
        return materias
    }
}

const mostrarInformacion = (materia)=>{
    let info = obtenerInfo(materia)

if (info !==false){
    let profesor = obtenerInfo(materia)[0][0]
    let alumnos = obtenerInfo(materia)[0]
    alumnos.shift()
    document.write(`El profesor de  <b>${info[1]}</b> es :<b style='color:red' >${profesor}</b></br>
    Los alumnos son :<b style='color:blue' >${alumnos}</b></br></br>`)
}
}

mostrarInformacion("fisica")
mostrarInformacion("programacion")
mostrarInformacion("matematica")
mostrarInformacion("logica")


const buscarAlumno = (alumno)=>{
    let info = obtenerInfo()
    let cantidadTotal=0;
    let clasesPresentes=[];
    for (i in info){
       if (info[i].includes(alumno)){
        clasesPresentes.push(" " + i)
        cantidadTotal++
       }
        
    }
 
    return `El alumno <b>${alumno}</b> esta en <b>${cantidadTotal}</b> clases
    <br> Estas son:<b style="color:green"> ${clasesPresentes}</b>.`
    
}
document.write(buscarAlumno("bruno"))
