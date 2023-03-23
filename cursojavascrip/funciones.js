function sumar(numero1,numero2){
    let nombre = prompt("Ingrese su nombre");
    alert(`Hola ${nombre} ingrese dos numeros para hacer su suma`);
    numero1 = parseInt(prompt("Numero1"))
    numero2 = parseInt(prompt("Numero2"))
    let suma = numero1 + numero2;
    document.write('La suma de ' + numero1 + ' y ' + numero2 + " es:" + suma);
}


const saludar = nombre=>document.write("Hola " + nombre)


let free = false;


const horario = hora=>{
    let edad = prompt("Que edad  tienes?");
    if (edad > 18) {
        if (hora >= 2 && free == false && hora < 7 ) {
            alert("Puedes pasar gratis eres la primera persona luego de las 2 am son las " + hora + ":0");
            free = true;
        } else {
            alert("Deberas pagar entrada son las " + hora + ":0");
        }
    }else{
        alert("Eres menor de edad no puedes ingresar");
    }
}

let cantidad = prompt("Cual es la cantidad de alumnos");
let alumnosTotales = [];

for ( i = 0;i < cantidad;i++){
    alumnosTotales[i] = [prompt("Ingrese el nombre del alumno" + (i+ 1)),0];//Pido el nombre
    //Guardo cada nombre en un arreglo en la posicion 0 de mi arreglo y la posicion 1 es 0 por el contador de asistencias

}


const asistencias = (nombre,i) => {//Envio nombre la posicio del arreglo y si es presente le sumo uno a la posicion 1
    let presencia = prompt(nombre);
    if (presencia == 'p' || presencia == 'P'){
        alumnosTotales[i][1]++;//En mi arreglo busco la posicion i que me da el nombre en la posicion esta
        //y en la posicion 1 esta el numero de presencia y le sumo uno cada vez que leo p
    }
    

}


for (i = 0;i<30;i++){//LLamo la funcion para las 30 clases el nombre es la posicion alumno por el for y la posicion 0 y luego la posicion 
    //alumno va marcando la presencia
    for(alumno in alumnosTotales){
        asistencias(alumnosTotales[alumno][0],alumno)
    }
}

for (alumno in alumnosTotales){//Escribo los resultados
    
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    _______Asistencia:${alumnosTotales[alumno][1]}:<br>
    _______Ausentes  : ${30 - alumnosTotales[alumno][1]}`;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+="<br>Reprobado<br>"
    }else{
        resultado+="<br></br>"
    }document.write(resultado)
}