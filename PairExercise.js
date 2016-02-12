var Shape = function(type){
	this.type = type;
}

Shape.prototype.greeting = function(){
		console.log("I am a " + this.type);
}

var triangle = new Shape("Triangle");

triangle.greeting();



// var Animal = function (species) {
// this.species = species;
// this.greeting = function () {
// console.log("hi, I am a " + this.species);
// }
// this.eat = function () {
// console.log('nom nom nom');
// };
// };
// var koala = new Animal('koala');
// var bunny = new Animal('bunny');
// koala.eat(); // > nom nom nom
// bunny.greeting(); // > hi, I am a bunny


// var t = new Triangle(1, 2, 3);
// t.constructor
// shape.isPrototypeOf(t)
// t.getPerimeter()
// t.getType()