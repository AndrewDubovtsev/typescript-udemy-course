// Often you can use custom types and interfaces interchangeably
// Interfaces can only be used to describe a structure of an object
// Inside types we can also store union types
// Interfaces are clearer
// Interfaces can extend more than one interface
// Class can only inherit from one other class
interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
      console.log(`${phrase} ${this.name}`);
  }
};

user1.greet('Hi there! I am');

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

// Interfaces are often used to share functionality amongst different classes
// Not regarding their concrete implementation
// Interface has no implementation details
// Abstract classes can be a mixture of abstract methods and concrete implementation
class Human implements Greetable {
    name?: string;
    age: number;

    constructor(n: string, age: number) {
        if (n) {
            this.name = n;
        }
        this.age = age;
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(`${phrase} ${this.name}`);
        } else {
            console.log('Hi! ')
        }
    }
}

let user2 = new Human('Andrew', 27);
user2.name = 'Greg';
console.log(user2);

// Custom Type to define a function
type AddFn = (a: number, b: number) => number;
// Interface defining a function
interface AddFnInterface {
    (a: number, b: number): number;
}

const add: AddFnInterface = (n1: number, n2: number) => n1 + n2;