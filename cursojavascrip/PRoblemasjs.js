


//document.write('Bienvenido a la heladeria');
//let dineroroberto = prompt("Ingrese su dinero,roberto");
//let dineropedro = prompt("Ingrese su dinero,pedro");
//let dinerocofla = prompt("Ingrese su dinero,Cofla");


class celulares{
    constructor(color,peso,resolucionPantalla,resolucionCamara,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.ram = ram ;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("Celular Encendido");
            this.encendido = true;
        }else{
            alert("Celular Apagado")
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando celular")
        }else{
            alert("El celular esta apagado")
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resolucion de :${this.resolucionCamara}`)
    }
    grabarVideo(){
        alert(`Grabando video en una resolucion de: ${this.resolucionCamara}`)
    }
    mostrarInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso : <b>${this.peso}</b></br>
        Resolucion de Pantalla: <b>${this.resolucionPantalla}</b></br>
        Resolucion de Camara : <b>${this.resolucionCamara}</b></br>
        Memoria Ram : <b>${this.ram}</b></br>
        `;
    }
}

//PAra los celulares de alta gama

class celularAltaGama extends celulares{
    constructor(color,peso,resolucionPantalla,resolucionCamara,ram,rce){
        super(color,peso,resolucionPantalla,resolucionCamara,ram);
        this.resCamaraExtra = rce;

    }
    grabarCamraLenta(){
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Reconociendo rostro");
    }
    mostrarInfoAltaGama(){
        return this.mostrarInfo() + `
        Resolucion de Camara trasera: ${this.resCamaraExtra}</br>
        `;
    }
}




const celular1 = new celulares("Negro","250g","5.5'","full hd","2gb");
const celular2 = new celulares("Azul","150g","4'","hd","2gb");
const celular3 = new celulares("Blanco","250g","8'","ultra hd","4gb");

document.write(`${celular1.mostrarInfo()}</br>
                ${celular2.mostrarInfo()}</br>
                ${celular3.mostrarInfo()}</br>
              `)

            
const celularAltaGama1 = new celularAltaGama("Negro","180g","9'","4k","6gb","full hd");
const celularAltaGama2 = new celularAltaGama("Azul","280g","10'","8k","12gb","ultra hd");

document.write(`Celulares de alta gamma: </br> ${celularAltaGama1.mostrarInfoAltaGama()}</br>
                ${celularAltaGama2.mostrarInfoAltaGama()}</br>
              `)




class Apps{
    constructor(cantDescargas,puntuacion,pesoEnMemoria){
        this.cantDescargas = cantDescargas;
        this.puntuacion = puntuacion;
        this.pesoEnMemoria = pesoEnMemoria;
        this.abierta = false;
        this.instalarApp = false;
    }
    abrir(){
        if(this.abierta == false && this.instalarApp == true){
            alert("Abriendo aplicacion");
            this.abierta = true;

        }else if(this.instalarApp == false){
            alert("La aplicacion no puede abrise porque no esta instalada")
        }else{
            alert("La aplicacion ya esta abierta")
        }
    }
    cerrar(){
        if(this.abierta == true && this.instalarApp == true){
            alert("Cerrando aplicacion");
            this.abierta = false;

        }else if(this.instalarApp == false){
            alert("La aplicacion no puede cerrarse porque no esta instalada")
        }else{
            alert("La aplicacion ya esta cerrada")
        }
    }
    instalar(){
        if(this.instalarApp == false){
            alert("Instalando aplicacion");
            alert("Aplicacion instalada");
            this.instalarApp = true;

        }else{
            alert("La aplicacion ya esta instalada en este dispositivo");
        }

    }
    Desinstalar(){
        if(this.instalarApp == true){
            alert("Desinstalando aplicacion");
            alert("Aplicacion desinstalada");
            this.instalarApp = false;

        }

    }
    mostrarAppInfo(){
        return `
        Cantidad de descargas: <b>${this.cantDescargas}</b></br>
        Calificacion : <b>${this.puntuacion}</b></br>
        Peso en memoria: <b>${this.pesoEnMemoria}</b></br>
        `;
    }
}



whatapp = new Apps("5 millones","4 estrellas","500mb")
instagram= new Apps("1 millones","5 estrellas","1.500mb")
facebook = new Apps("3 millones","3 estrellas","2.1Gb")
Pubg = new Apps("10 millones","4.5 estrellas","100mb")
controArchibos = new Apps("100.00","5 estrellas","500mb")
photoEditor = new Apps("2.500 millones","2 estrellas","200mb")
CallOfDuty = new Apps("10.000 millones","3 estrellas","450mb")

whatapp.instalar()
whatapp.abrir()
whatapp.cerrar()
whatapp.Desinstalar()

document.write(`WhatApp: </br> ${whatapp.mostrarAppInfo()}</br>      
                Instragram: </br> ${instagram.mostrarAppInfo()}</br>
                Facebook: </br> ${facebook.mostrarAppInfo()}</br>
                Pubg: </br>${Pubg.mostrarAppInfo()}</br>
                Controlador de archivos: </br> ${controArchibos.mostrarAppInfo()}</br>
                Editor de fotos: </br>${photoEditor.mostrarAppInfo()}</br>
                Call of duty mobile: </br>${CallOfDuty.mostrarAppInfo()}</br>
              `)