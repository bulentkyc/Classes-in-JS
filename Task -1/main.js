/* Task - 1: Create a class and name it Person

Task - 2: Request 2 parameters for Person. 
Parameter - 1: name
Parameter - 2: lastName

Task - 3: Create a method inside of Person and name it aging

Task - 4: Request 'age' for Person

Task - 5: with aging method increase 'age' 1 more

Task - 6: create an instance from Person and name it person
    and give parameters as you wish.

Task - 7: log to console parameters one by one

Task - 8:log to console person and Person check differences between all

Task - 9: add year parameter to aging and instead of 1 increase age 
    with year

Task - 10: call aging method with person and log person again

Task - 11: create another instance and name it anotherPerson

Task - 12: call again aging but with anotherPerson and log this too.

Task - 13: request a parameter for Person and name it 'auth'.
    This parameter can be true or false. Also use get and set to combine
    this parameter with age. 

    If auth equal to false you should set it false.
    But if it's true, this time you should check age also. If it's
    also more than 18 you should set auth as true but oherwise you
    should set it false.

Task - 14: Create a new class and name it Employee

Task - 15: Extend Person class with Employee (Employee extends Person)

Task - 16: create a method into Employee and name it logAge
    This method should log to console age!

Task - 17: create an instance from Employee and name it employee

Task - 18: call aging with 20 from employee.

Task - 19: call logAge from employee and check the console/

Task - 20: extend aging from Employee and add this future:
    log to console also this kind of message- Happy new year, you are XX
    anymore. You are YY years older.

Task - 21: Make Task - 13 more flexible. For example, if you set person
    less then 18. For now even if you call aging method and if person 
    getting older more than 18, auth is still false. In this case 
    make it true.

*/
class Person{
    constructor(name, lastName, age, auth){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.auth = auth;
    }

    get auth(){
        return this._auth;
    }

    set auth(value){
        if(value == true && this.age >= 18){
            this._auth = true;
            return;
        }
        this._auth = false;
    }

    aging(year){
        this.age += year;
    }
}

let person = new Person('Bulent', 'Kayici', 32, true);

console.log(person.name, person.lastName, person.age);

console.log(person, Person);

person.aging(8);
console.log(person);

let anotherPerson = new Person('abc', 'def', 10, true);

anotherPerson.aging(5);
console.log(anotherPerson);


