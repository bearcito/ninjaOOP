class Ninja {
 constructor(nombre,salud)
 {
 this.nombre = nombre
 this.salud = salud;
 this.velocidad = 3 
 this.fuerza = 3 
 }
 sayName(){
    console.log(`hola mi nombre es ${this.nombre}`)
 }
 showStats(){
    console.log(`mi salud es ${this.salud} mi velocidad es ${this.velocidad} mi fuerza es ${this.fuerza}` )
 }
 drinkSake(){
    this.salud += 10;
    console.log( `he bebido sake y ahora mi salud es ${this.salud}` )
 }
}

const ninja1 = new Ninja("tenten",75);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake()
