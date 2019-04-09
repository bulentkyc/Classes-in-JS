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