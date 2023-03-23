//CAMBIAN AL ARRAY


let array1 = ["hola","chau","bruno","camion"];

//pop()Elimina el ultimo elemento de un array y lo devuelve en la variable

let resultado = array1.pop();//resultado ahora vale camion y arra1 ahora no tiene camion

//document.write(resultado);

//shift():Hace lo mismo pero con el primero

// push() El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

//reverse El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.

//El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.



//El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. 
//La ordenación no es necesariamente estable. 
//El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.

//El método splice(c,k,j) cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
//c:posicion donde empiezo
//k: cantidadde elementos a eliminar solo si en j no hay nada
//j:remplaza los elementos de k en caso de que k sea 0 simplemenete los agrega en la posicion

//CREAN O HACEN ALGO CON EL ARRAY SIN MODIFICARLO

//METODOS ACCESORES

//join(c) -El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) 
//en una cadena y devuelve esta cadena.
//c: podria ser el separador entre el string que guste

//slice()-El método slice() devuelve una copia de una 
//parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
//slice(k,j) desde k hasta j no incluido
//Tambien existen algunos vistos en cadenas.toString(),indexOF()lastIndexOF(),includes()


//MEtodode arrays de repeticion

//filter():Crea un nuevo array con todos los elementos que coumplan la condicion
//implementada por la funcion
//filter(vtro una funcion y se ejecuta para cada elmeento del array)
//forEach():ejecuta la funcion indicada una vez por cada elemento del array
//forEach(function) ejecuta funcion para cada elemento del array

//Filter y forEach son similares con la diferencia que filter
//Me permite ejecutar un condicional a los elemenmtos del array
//EJ numeros = array
// let resultado = numeros.filter(numeros => numeros.legth > 5)
//Solo si el elemento (string) del array tiene mas de 5 elementos