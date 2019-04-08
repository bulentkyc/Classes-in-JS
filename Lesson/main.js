//Chapter 1: Class Founding
//Create a simple Class
//Be careful class is lowercase, name of class is uppercase
//Popular mistake: put comma between curly braces
class User{
        //If you need parameter(s) you have to create constructor
        //This is default method and called when you take an instance
        constructor(name, email){
            //left side of equals are varaibles for class
            //right side of equals are paremeters comes from instance
            this.name = name;
            this.email = email;
        }

        //We can create many methods as we wish and call via instances
        salute(){
            alert('Hi ' + this.name + '\n' + this.email);
        }

}

//Wee take an instance from class with 'name' and 'email' parameters
let userInst = new User('Bülent', 'bulent.kauici@icloud.com');

//We call method whis is named 'salute'
userInst.salute();

/*Unlike regular functions, a class constructor 
can not be called without new*/
//User('Bülent', 'bulent.kauici@icloud.com');

/*
Classes have a default constructor() {}
If there’s no constructor in the class construct, 
then an empty function is generated, just as if 
we had written constructor() {}.
*/

//We can use getters and setters with classes 
class UserName {
    constructor(name){
        this.name=name;
    }

    get name() {
        return this._name;
    }

    set name(value){
        if(value.length < 3) {
            alert('Name is too short!');
            return;
        }
        this._name = value;
    }
}

let userName = new UserName('Bulent');
alert(userName.name);// Bulent

let userNameEmpty = new UserName('');// Name is too short

//Chapter 2: Class Inheriting
//Create a class
//This class has always 1 method
//This class has name and count as variables
class Food {
    constructor(name){
        this.name = name;
        this.count = 0;
    }

    buy(count){
        this.count += count;
    }

}

//Create another class which is extending first one (Food)
//This class has 3 methods (also 'buy')
//This class has name and count as same with first one. Also eaten.
class Banana extends Food {
    eat(eaten){
        this.count -= eaten;
    }

    showCount(){
        alert('you have ' + this.count + 'foods');
    }
}

//Take an inctance from 'Banana' class
let banana = new Banana('chicita');
/*We can call buy method. Because it comes to Banana 
via extending Food class*/
banana.buy(3); // buy 3 bana. This increase food number 3.
banana.eat(1); // eat 1 banana. This decrease food number 1.
banana.showCount();// we 2 foods

/* Overwrite method buy on Food Class 
but this effect just Orange not banana*/
class Orange extends Food {
    buy(countFromOrange){
        // count is clone of Food count but independent from Banana count
        this.count += countFromOrange + 1;
    }
}

let orange = new Orange('orange');
orange.buy(5); // buy 5 and 1 is extra
alert(orange.count);// 6 foods


//Extend method instead of overwrite
class Meloon extends Food {
    buy(count){
        super.buy(count);// Everything comes to here from parent method
        console.log(count, name);
    }
}

let meloon = new Meloon('Dole');
meloon.buy(3);


//Overwriting constructor
class Strawberry extends Food {
    constructor (name) {
        super(name); // Without super you can not call 'this'
        this.countS = 2;
        console.log(this.count, this.name);
        /* this.count comes from Food constructor but this.name comes
        from Strawberry constructor /*
        /*!!! Avoid to use same named varaibles in child constructor
        and parent constructor!!!
        */
    }

    log(countSt){
        // count is clone of Food count but independent from Banana count
        this.countS += countSt;
        console.log(this.countS, this.name)
    }

}

let strawberry = new Strawberry('straw');
strawberry.buy(3);
strawberry.log(3);
