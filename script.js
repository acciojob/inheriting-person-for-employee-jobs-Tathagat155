
function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.greet=function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
}
function Animal(name,age,jobTitle){
	Person.call(this,name,age)
	this.jobTitle=jobTitle;
}
Animal.prototype.jobGreet=function(){
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)	
}
Animal.prototype=Object.create(Person.prototype)
Animal.prototype.constructor = Animal;
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
