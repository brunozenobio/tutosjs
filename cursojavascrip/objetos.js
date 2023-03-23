class animal{
    constructor(especie,edad,color){
        this.especie = especie;//this hace referencia al objeto al decir this especie
        //digo que el objeto tendra una propiedad llamada especie y sera igual a especie del constructor
        //pero no tiene porque tener el mismo nombre lo que importa es que se asigne
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie} tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo(){//Es un metodo que llama al atributo info
       document.write(this.info);
    }
}
 
class perro extends animal{// La clase perro hereda propiedades de la clase animal
    constructor(especie,edad,color,raza){//Hereda de la calse animal la especie y la edad
        super(especie,edad,color);
        this.raza = null;

    }
    static ladrar(){
        alert("WAW");
    }
    set setModificarRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
}


const perro1 = new perro("perro","5","rojo","pitbul");
const gato = new animal("gato","3","gris");
const pajaro = new animal("pajaro","5","verde");


//Metodo estatico: metodo que no necesita de la definicion de la clase para crearse
//En el ejemplo del perro puedo crear un metodo llamado ladrar que sera estatico ya que 
// no usara ninguno de los atributos del constructor por lo tanto el objeto no necesita del objeto
//static ladrar(){}
//Luego si no creara el objeto perro1 puedo llamar  a la clase y usar el metodo ladrar
//perro.ladrar()

//Metodos getters y setters
//Los getters son para obtener un valor
//Los setters son para modificarlo o definirlo
//Ejemplo el el constructor digo:
//this.raza = null;
//Luego defino un metodo el cual es
//set modificar(newName){
// this.raza = newName;
//}
//Luego con el objeto hago
//perro1.modificar = "Hola" como es propiedad se usa el igual
//Y raza ahora vale "Hola"

perro1.setModificarRaza = "Hola";
alert(perro1.raza);
perro1.setModificarRaza = "Hola1";
alert(perro1.getRaza)




