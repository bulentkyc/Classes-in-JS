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

*/
class Person{
    constructor(name, lastName, age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    aging(year){
        this.age += year;
    }
}

let person = new Person('Bulent', 'Kayici', 32);

console.log(person.name, person.lastName, person.age);

console.log(person, Person);

person.aging(8);
console.log(person);


