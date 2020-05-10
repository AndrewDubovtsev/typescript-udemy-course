// const names: Array<string> = ['Max', 'Manuel']; //string[]
//
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000)
// });
//
// promise.then(data => {
//     data.split(' ');
// });

// for number type
function fun(args: number): number {
    return args;
}

// for string type
function fun(args: string): string {
    return args;
}

// for any type
function fun(args: any): any {
    return args;
}

function fun<T>(args:T):T {
    return args;
}

// for string
const resultString = fun<string>("Hello World");

// for number
const resultNumber = fun<number>(200);

function identities<T, U> (arg1: T, arg2: U): [T, U] {
    return [arg1, arg2];
}

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30});;
console.log(mergeObj.age);

// function identity<T>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }

interface Length {
    length: number;
}

function identity<T extends Length>(arg: T): T {
    // length property can now be called
    console.log(arg.length);
    return arg;
}


interface  Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length > 0) {
        descriptionText = `Got ${element.length} ${element.length === 1 ? 'element' : 'elements'}`
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Max'}, 'name');

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'Max'});
// objStorage.addItem({name: 'Manu'});
// objStorage.removeItem({name: 'Max'});
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
//names.push('Manu');