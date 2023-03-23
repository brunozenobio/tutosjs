//Metodos aplicables a una cadena

let cadena1 = "cadena de prueba de";//Tambien puedo definir la cadena como new String("cadena de prueba")
let cadena2 = " hola"
//concat():junta dos a mas cadenas

let resultado = cadena1.concat(cadena2);//Devuelve "cadena de prueba hola"

//document.write(resultado);

//startsWith : si una cadena comienza con los caracteres de otra devuelve true
//endsWith : lo mismo pero en el final
resultado = cadena1.startsWith("c");//DEvuelve true

//document.write(resultado);

//includes(): si una cadena estra dentro de otra devuelve true


resultado = cadena1.includes("na de p");//Devuelve true

//document.write(resultado);

//indexOf():DEvuelve el indice del primer elemento de una cadena si no devuelve -1

resultado = cadena1.indexOf("na de p");//Devuelve 4 que es la posicion desde la cual encuentro esa cadena
//document.write(resultado)


//lastIndexOf:Igual que indexOf pero devuelve la primera posicion de la ultima vez que aparece la cadena

resultado = cadena1.lastIndexOf("de");//Devuelve 17 que es la primer posicion ultima donde se encuentro esa cadena
//document.write(resultado);


//padStart(c,s):Rellena la cadena al principio con los caracts deseados, c es hasta que cantidad total se quiere rellenar y s el string a poner
//padStart(c,s):Rellena la cadena al final con los caracts deseados, c es hasta que cantidad total se quiere rellenar y s el string a poner


//resultado = cadena1.padStart(27,"empieza ");//Devuelve "empieza " + cadena



//document.write(resultado);

//repeat(a):devuvelve la cadena repetida a veces



//split():Divide la cadena como se pide 


//resultado = cadena1.split(" ");//Me devuelve un array donde cada elemento es sepearado por un espeacio de la cadena

//en este caso resultado[0]= cadena

//resultado = cadena1.split(" de")//Cada vez que encuentre " de" lo separa

//document.write(resultado[1])

//substring(c,j) devuelve una subcadena desde las posiciones c a j - 1

//resultado = cadena1.substring(0,3)//devuelve cad

//document.write(resultado)


//toLowerCase():Convierte la cadena en minuscual
//toUpperCase():Conviernte  la cadena en mayuscula
//toString():Convierte lo enviado en cadena podria aplicarse para un arrar [hola,como,estas] y uso
//to string y pido el primer elemento en lugar de hola seria "h"
//trim():Elimina espacios al inicio y al final
//trimStart():Elimina espacio al inicio
//trimEnd():Elimina espacios al final