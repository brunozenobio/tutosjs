
//Mando un alerta con que dice hola, y da una casilla para ingresar texto, 
//al poner eval evalua la funcion que escribo luego se guarda en a
//document.write(a)


// == compara si es el mismo valor === es si son el mismo valor y el mismo dato
//ej 23=="23"(TRUE) 23 === "23" (FALSE)

//&& (y logico) || (o logico) !(negar)


let nombre = prompt("Hola digite su nombre");

if (nombre != undefined) {
    document.write(`Bienvenido ${nombre}`);
    
}

//ARREGLOS  <b>${pc["nombre"]}</b> // en negrita al poner l oque sigue del 
//signo pesos puedo concatenar el string a lo que estaba escribiendo
let pc = {
    nombre:"BrunoPc",
    so : "Linux",
    ram:"6gb",

};

let escribir = `<br> El nombre de de mi pc es <b>${pc["nombre"]}</b> <br>
                El sistema operativo es  <b>${pc["so"]}</b> <br>
                La memoria ram es <b>${pc["ram"]} </b>`
document.write(escribir)


//BUcles

let n = 0

while(n!=100){
    n++;
    if (n=5) {
        break;//Corta el bucle,El continuo saltea el bucle una iteracion 
    }
   

};

let numer=8;


for (let i = 0; i < numer ; i++) {
    document.write(" <br>" + i)
    
};




let hola = ['hola','como','estas']
hola.saludar="hola como estas"

for (saludo in hola) {//saludo = cada posicion de el arreglo hola,la propiedad saludar se conserva en el bucle
    document.write(saludo)
    
}


for (saludo of hola) {//saludo = cada elemento de el arreglo hola
    
    
}

//label

forLabell:
for (let i = 0;i < numer ; i++) {
    
    break forLabell;//Finalizo el label  el cual podria tener muchos for y terminan todos
    
}