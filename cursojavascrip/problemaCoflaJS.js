const contenedor = document.querySelector(".flex-container")
const button = document.querySelector(".send-button")
let valorAntiguo = button.value;
button.value = valorAntiguo.toUpperCase()
let contador = 0;

function crearLlave(nombre,modelo,precio){
    contador++;
    img = `<img class='llave' src='imagen.png'>`
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 >${modelo}</h3>`;
    precio = `<b><p>$ ${precio}</p></b>`;
    return [img,nombre,modelo,precio]
}

const chamgeHadden = (number) => {
    document.querySelector(".key-data").value = number//TOMA EL ELEMENTO CON CLASE KEY-DATA Y CAMBIA EL VALUE POR NUMBER

}


let documentFragment = document.createDocumentFragment();
for (let i = 1; i <= 20; i++) {
    let modeloRandom = Math.trunc(Math.random()*10000)
    let precioRandom = Math.trunc(Math.random()*10 + 30)
    let llave = crearLlave(`llave ${i}`,`modelo${modeloRandom}`,precioRandom);
    let div = document.createElement('div');
    div.addEventListener("click",()=>{chamgeHadden(modeloRandom)})//LLAMO A UNA FUNCION AL HACER CLICK
    div.tabIndex = i;
    div.classList.add(`item-${i}`,`flex-item`) //AGREGO DOS CLASES
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div)
    
}

contenedor.appendChild(documentFragment)
