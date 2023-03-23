//DOM:documenet objet model: INterface que contiene todos los objetos para representar un documento html etc
//Es decir tiene html estilo java etc
//- Nodo - Un nodo en el DOM es cualquier etiqueta del cuerpo, parrafo, el mismo
//body © incluso las etiquetas de una lista.

// “Document: e1 nodo document es el nodo raiz, a partir del cual derivan el resto
// de nodos.

// “Element: nodos definidos por etiquetas html.

// *Text: el texto dentro de un nodo element se considera un nuevo nodo hijo de
// tipo text (texto).

// “attribute: los atributos de las etiquetas definen nodos, (en JavaScript no los
// veremos como nodos, sino como informacién asociada al nodo de tipo element)

// “comentarios y otros: los comentarios y otros elementos como las declaraciones

// doctype en cabecera de los documentos HTML generan nodos.
// 



// - Nodo - Un nodo en el Dom es cualquier etiqueta del cuerpo, como un parrafo, el mismo body o incluso las etiquetas de una lista.

// “Document: e1 nodo document es el nodo raiz, a partir del cual derivan el resto de nodos.
// “Element: nodos definidos por etiquetas html. (p div h1 etc)

// ‘Text: el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto).
//es decir el contenido de un element

// “attribute: los atributos de las etiquetas definen nodos, (en Javascript no los veremos como nodos, sino como
// informacion asociada al nodo de tipo element)
// *couentarios y otros: los comentarios y otros elementos como 
//las declaraciones doctype en cabecera de los documentos HTML generan nodos.

 
//Element_node            1(numero de nodo)
//Atribute_node             2
//text_node                 3
//cdata_section_node         4







/////////////////

// 28) Document - Metodos de Seleccién de elementos  get es de document Que es el objeto al cual se le aplica
//El metodo document.atributo

// getElementBytd() - selecciona un elemento por ID

// getElementsByTagName() - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.

// querySelector() - Devuelve e1 primer elemento que coincida con el grupo especificado de selectores.

// querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado de selectores.
// 
//Id se selecciona con "#nombreId"
//clases(query) con ".nombreClases"

let a = document.getElementById("#p");

document.write(a)

//querySelector() selecciona las clases
 a = document.querySelectorAll(".parrafo");//con all selecciona todos y si pongo entre corchetes el que quiero
 //selecciona la clase de ese
 
 document.write(a[2])
 


 //Metodos para Definir,obtener y eliminar valores de atributos element.atributo
 //      - setAttribute() -Modifica el valor de un atributo
 //      - getAttribute() -Obtiene el valor de una atributo
 //      -removeAtribute()- Remueve el valor de un atributo


 const rangoEdad = document.querySelector(".rango");
 rangoEdad.setAttribute("type","range")//primer valor el atributo que quiero modificar, segundo el valor a darle
 //Si no tienen ningun atributo tambien lo puede crear

valorAtributo = rangoEdad.getAttribute("type")
 document.write(valorAtributo)//ME deuvelve el atributo "tpye" de la el elemento con clase rango

//Si uso el set atributo sin dar valor "" esta type pero vacio, si uso remove directamente borro el type

// Atributos globales (//claseTituloH1.setAttribute("nombre","formato"))
// class - lista de clases del elesento separadas por espacios
// contenteditable - indica si el elemento puede ser modificable por el usuario (bool)
// dir indica 1a direccionalidad del texto (ltr o rtl para que el texto vaya de izquierda a derecha o viceversa)
// hidden - indica si el elemento aun no es, 0 ya no es, relevante. (true o false)
//claseTituloH1.setAttribute("hidden","true")
// = id - define un identificador unico.

// ~ tabindex - indica si el elemento puede obtener un focus de input, //Es decir si puedo clickearlo y seleccionar
// claseTituloH1.setAttribute("tabindex","numero") el unmero define el orden de tab
// - style - Contiene declaraciones de estilo Css para ser aplicadas al elemento.
// - title - contiene un texto con inforsacién relacionada al elemento al que pertenece.
// 



document.write("<br>")

const claseTituloH1 = document.querySelector(".titulo");

//claseTituloH1.setAttribute("contentEditable","true") //Me permite editar el h1 en el html 


claseTituloH1.setAttribute("title","jajjahola")//informacion del titulo cuando pasa el mause "jajjahola"



/////////////////////////////////////////////////
document.write("<br>")

// Atributos de inputs   input.atributo me deuvele el valor si ademas lo igualo a algo se lo cambio 
// = className // que hay adentro de class
// value   //Muestra el valor del input que hay dentor de value
// type     //El tipo de type
// ~ accept   //ACepta tipos de archivos
// ~ form    // SI boton de enviar esta dentro del form se envia al servidor
//Pero si esta fuera no.PERO SI MODIFICO EL ATRIBUTO FORM DEL INPUT BOTON 
//CON EL ID DEL FORM SI FUNCIONA
// minLength  //Minima cantidad de caracteres que tiene que tener un input(TABMEIN PUEDE HACERSE CON setAttribute("minlength","4")
// placeholder  //Escribe en el input un valor de ejemplo
// = required  Si es un capo requerido o no con tal que tenga un valor aunque sea un espacio
// sera un campo requerido no dejara enviarsi no 


const input = document.querySelector(".input-normal");

document.write(input.type) //Accedemos a los atributos directamente desde java por eso no va el metodo get o set

input.type="file"  //De esta forma puedo modificar

input.accept ="image/png" //Acepta tipos de archivos type=file y puedo decirle que tipo de archivo modificandolo


const form = document.querySelector(".modifinlegth");//CUando quiero enviar me dice que el minimo es 4

form.type="text";
form.minLength =4;
form.placeholder="jaja hola como estas"

form.required= "false";



document.write("<br><br><br><br>")


// Atributo style MODIFICAR ALGO DE CSS DEL ATIRBUTO atribto que se le aplica al lement
// usos y ejemplos
// propiedades camel case en lugar de backgroud-color es backgroudColor camel case
// 

let titulo1 = document.querySelector(".titulo1");

titulo1.style.color = "red"
titulo1.style.backgroundColor = "#48e"
titulo1.style.border = "4px solid black"
titulo1.style.padding = "15px"

document.write("<br><br><br><br>")
document.write("<br><br><br><br>")

// Clases, classList y Metodos de classList   
//Hacer cosas con las clases de los objetos

// Definicion y usos
// add() - afiade una clase //Añado una clase
// remove() - remueve una clase
// item() - devuelve la clase del indice especificado
// contains() - verifica si ese elemento posee o no, la clase especificada.
//tituloclaslist.classList.contains("tituloGrande")--false
// replace() - reemplaza una clase por otra //remplaza una por otra, si no existe no remplaza y  devuelve false 
// toggle() - sino tiene la clase especificada, la agrega, si ya la tiene, la elimina.
//tambien hay un parametro opcional
//tituloclaslist.classList.toggle("asd",true) siempre tiene que dar true, por lo tranto si esta la deja, si no esta la agrega


let tituloclaslist = document.querySelector(".tituloclaslist");

tituloclaslist.classList.add("tituloGrande") //En css modifico la clase tituloGrande y como la agrego cambia
tituloclaslist.classList.remove("tituloGrande"); //Elimino la calse tituloGrande
document.write(tituloclaslist.classList.item(1)); //hay 4 clases y esto me devuelve hola que es la clase en el indice 1(segundo elemento)

document.write("<br><br><br><br>")
document.write("<br><br><br><br>")
// Creacion de Elementos
// - createElements()
// - appendchild¢)
// - createDocumentFragment( )
// 

const titulo2= document.querySelector(".titulo2");

let resultado = titulo2.textContent;//Guarda en resultado el el valor contendido por la clase titulo2
document.write(resultado);