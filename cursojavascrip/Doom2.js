// Otencién y ModiFicacién de elementos
// textContent - devuelve el texto de cualquier nodo.|]
// = innertHTMt - devuelve el contenido htw1 de un elewento
// outerHTML - devuelve el codigo HTML completo del elemento



const titulo2= document.querySelector(".titulo2");

let resultado = titulo2.textContent;//Guarda en resultado el el valor contendido por la clase titulo2
//Si parte del texto esta en por ejemplo b para hacerlo negrita no devuelve, solo el texto no el html
//ES DECIR NO IMPORTA EL ESTILO, si la calse esta no visible inner text no la devuelve
document.write(resultado);//Puedo hacer titulo2.textContent="" y modificarlo
 
document.write("<br>")
alert(resultado)
resultado = titulo2.innerHTML//muestra todo lo que hay en la etiqueda de la clase 
document.write(resultado)
alert(resultado)////

//Modificar de <b>elementos</b> 

/////
//Para que sirve createElements()?

resultado = titulo2.outerHTML//muestra todo lo que hay en todo el codigo de la calse incluido
document.write(resultado)
alert(resultado)
/////
//<p class="titulo2">Modificar de <b>elementos</b> </p>
/////

resultado = '<h1 class="titulo2">Modificar de <b>elementos CAMBIADO</b> </h1>'
document.write(resultado)

// Creacién de Elementos
// - createElements() CREA UN ELEMENTO(ELEMENTES ES UN NODO
// - createTextNode    CREA UN TEXTO DENTRO DE UN NODO
// - appenChild() Agrega el texto de nodo al nodo
//es decir si tengo un div y adentro un p al trabjar en el div para modificar el p hay que usar el child(hijo)
// -createDocument Fragnent()
// //const fragmento = document.createDocumentFragment();
//contenedor.appendChild(fragmento)
//puedo con el appenChild agregar muchas veces al item en un bucle for




document.write("<br><br><br>")

const contenedor = document.querySelector(".contenedor");
const item = document.createElement("LI");//DEBE SER EN MAYUSCULAS SI O SI




console.log(item); 
const textoCreadoEnItem = document.createTextNode("asd");

item.appendChild(textoCreadoEnItem);//Agrego el texto creado en el item de lista
console.log(item); 

//En lugar de agregar al div y a la lista un texto podria hacerse asi
//item.innerHTML"asd"


contenedor.appendChild(item);//Agrego el nodo list al div 
console.log(contenedor);

////SALIDAAAA
//<div class="contenedor">
    //<li>asd</li>//
//</div>


// -createDocument Fragnent()





document.write("<br><br><br>")


// OBTENCION Y MODIFICACIONES DE CHILDS (Hijos)
// firstchild

// ~ lastchild
// ~ Firstelementchild
// -lastelementchild
// -childNodes
// - children


const contain = document.querySelector(".contain");//EL DIV CONTAIN ES MADRE DEL H2 Y EL P

const primerHijo = contain.firstChild;//DEVULVE EL PRIMER ELEMENTO O SEA EL H2, PERO SI HAY UN ESPACIO DEVUELVE EL ESPACIo
//PARA lastChild es LO MISMO

const primerElemento = contain.firstElementChild; //ES IGUAL AL ANTERIOR PERO NO MUESTRA LOS ESPACIOS EN BLANCO
//TOMA EL ELEMENTO SIN IMPORTAR EL ESPACIO

const hijos = contain.childNodes; //DEVUELVE UN NODELIST TODA LA LISTA DE LOS NODOS HIJOS

hijos.forEach(hijo =>console.log(hijo));//RECORRE LA LISTA


const etiquietaHijo = contain.children; //SOLO LOS ELEMENTOS(EQUITQUETAS HTML) hijos Y ES UN HTML COLLECCTION

for(hijo of hijos){
    console.log(hijo)
}

//LISTA LOS ELEMENTOS







//  METODOS DE CHILDS (Hijos)
// - replacechild()
// ~ removechild()
// ~ haschildnodes( )

const parrafo = document.createElement("P").innerHTML="Parrafo";
const h2Nuevo = document.createElement("H2");
h2Nuevo.innerHTML ="TituloH2"//VALOR AL NUEVO H2 CREADO
const h2Antiguo = document.querySelector(".h2");
contain.replaceChild(h2Nuevo,h2Antiguo)
//EL CHILD DE CONTAIN H2 ES GUARDADO EN H2 ANTIGUO Y REMPLAZADO POR UNO NUEVO CREADO 

//contain.removeChild(h2Nuevo); REMUEVO UN CHILD


let resp = contain.hasChildNodes();//DEVUELVE VERDADERO SI TIENE HIJOS Y FALSO SI NO

//PROPIEDADES DE PARENTS (Padres)
// parentElement SELECCIONES EL PADRE ELEMENTO DE UN ELEMENTO
// parentNode SELECCIONA EL PADRE DE UN ELEMENTO PODRIA EL PADRE NO SER HTML
// EN CASOS MUY ESPECIFICOS SON DISTINTOS
const h2 = document.querySelector(".h2");
const p = document.querySelector(".p");

const h2Padre = h2Nuevo.parentElement;
 
console.log(h2Padre);




//  PROPIEDADES DE SIBLINGS(Hermanos) //MISMO RANGO HIJOS DE UN MISMO PADRE
// ~ nextSibling
// ~ previousSibling
// ~ nextElementSibling
// - previousElementSibling

const her = h2Nuevo.nextElementSibling;

console.log(her)// DA EL HERMANO QUE LE SIGUE A H2  SI USO EL NEXTSIBLING SOLO DA TEXTO VACIO QUE ES LO QUE HAY
console.log(her.previousElementSibling)//DEVUELVE EL MISMO H2 YA QUE ES EL ANTERIOR A SIGUIENTE


//NODOS EXTRAS
//-closest() SELECCIONA EL ELEMENTO ASCENDENTE MAS CERCANO QUE COINCIDA CON EL SELECTOR

const div = document.querySelector(".div-3");

console.log(div.closest(".div")) //ME DEVUELVE EL SEGUNDO DIV YA QUE ES EL ASCENDE MAS CERCANO
//CON LA CLASE DIV