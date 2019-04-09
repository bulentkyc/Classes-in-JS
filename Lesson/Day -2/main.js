// Chapter - 3 Static properties and methods
/* 'static' present an opportunity to do somthing on class level
    Because you can not reach static methods via instances.
    You have to reach directly class and then you can static methods
*/
class MyFirstStatic {
    //As syntax just add 'static' before method
    static firstMethod() {
        console.log('hi');
    }

    secondMethod(){
        console.log('Hello World');
    }

}

let myFS = new MyFirstStatic;
//myFS.firstMethod(); // Error - You can't reach static methods via instances
myFS.secondMethod();

MyFirstStatic.firstMethod();
//MyFirstStatic.secondMethod(); // Error - You can't reach general methods directly

/* 
Use case of static.
Create a class for create articles with 'title' and 'date'.
create a static method for 'sort'. This method compares articles about dates
*/
class Article {
    constructor(title, date){
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }

    // Take an instance of Class from inside :)
    static createTodays() {
        // this = Article (class)
        return new this("Today's digest", new Date() );
    }

}

// we took instances from Article class and store those inside  articles array
let articles = [
    new Article('Mind', new Date(2019, 11, 1)),
    new Article('Body', new Date(2019, 8, 1)),
    new Article('Soul', new Date(2019, 3, 1))
];

//Magic occurs
articles.sort(Article.compare);

//See the result
console.log(articles);

let summary = Article.createTodays();
console.log(summary);

// Static Properties
class StaticProperty {
    static myVariable = 'Bülent Kayici';
}

// we can use static properties just via class not instance
console.log(StaticProperty.myVariable);

// Statics and inheritance
/* Animal class has static compare method and if some classes en=xtend this class,
    they will clone this static method also. Afterwards if some one would like to
    reach clone static method, they should call directly new class and then clone 
    static method.

    For example, Rabbit class extends Animal class and if you'd like to use compare static method
    you have to write like this:

    'Rabbit.compare'
*/
class Animal {
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }

    // If we won't send speed value to this method. It'll consider speed as 0;
    run(speed = 0){
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    static compare(animalA, animalB){
        return animalA.speed - animalB.speed;
    }

}

// This class will have own compare static method on the end
class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
}

let rabbits = [
    new Rabbit('White Rabbit', 10),
    new Rabbit('Black Rabbit', 5)
];

//!!!!!!!! We are calling Rabbit class not Animal class
rabbits.sort(Rabbit.compare);

rabbits[0].run();
rabbits[1].run();
console.log(`${rabbits[1].name} is winner!`);


// Chapter - 4: Private and Protected properties and methods
/*
Public: () accessible from anywhere. They comprise the external interface. 
Till now we were only using public properties and methods.

Private: (#) accessible only from inside the class. These are for the internal interface.

Protected: (_) accessible only from inside the class and those extending it.
*/

// Let's create a simple coffe machine :)
class CoffeeMachine {
    
    //waterAmount = 0; // This may not work on some js compilers

    constructor(power) {
        this._waterAmount = 0;
        this._power = power; // if it will be public you need to use setter also
        console.log(`Coffee machine is created, power: ${power}`);
    }

    //
    set waterAmount(value) {
        if (value < 0 || value>300) {
            throw new Error('Water amount is not appripriate')
        }
        this._waterAmount = value;
    }

    get waterAmount(){
        return this._waterAmount;
    }

    /* If you use get without set this property will be define while taking instance.
    After that you can not change it!
    */
    get power() {
        return this._power;
    }

}

// create the machine
let cMachine = new CoffeeMachine(220);

// add water
//cMachine.waterAmount = 400; // Error more than 300
//cMachine.waterAmount = -4; // Error less than 0
cMachine.waterAmount = 40; // :)

cMachine.power = 500; // Error or does not work

cMachine._power = 500; // works, because
/*
Protected fields are naturally inheritable. Unlike private ones that we’ll see below.
This part maybe not work on your computer.


console.log(cMachine);

// Private (#) - Not totally superted by Js machines. For now partially supported.

class CoffeMachine{
    
    checkWater(water){
        if (value < 0 || value > 300){
            throw new Error('Water amount is not appripriate');
        }
    }

    constructor(){
        this.#waterLimit = 200;
        this._waterAmount = 0;
    }

    set waterAmount(value){
        this.#this.checkWater(value);
        this._waterAmount = value;
    }

    get waterAmount () {
        return this.waterAmount;
    }

}

let coffeMachine = new CoffeMachine;

coffeMachine.#checkWater();
coffeMachine.#waterLimit = 1000;

coffeMachine.waterAmount = 100;
*/