// Intersection allow to combine other types
type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
// We could have achieved the same by using extending interfaces
// or by using an Intersection on interfaces

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
// Intersection could be used with any types

// Function overloads - different parameter and different return types
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  // Type Guard - we either concatenate strings or add mathematically
  if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Max', 'Schwarz');

// Optional chaining
const fetchUserData = {
    id: 'u1',
    name: 'Max',
    job: {title: 'CEO', description: 'My own company'}
};

console.log(fetchUserData?.job?.title);

// Nullish Coalescing
const userInput = '';
// ?? - if this is null or undefined
const storedData = userInput ?? 'DEFAULT';

type UnknownEmployee = Employee | Admin;
const printEmployeeInformation = (emp: UnknownEmployee) => {
    console.log(`Name: ${emp.name}`);
    // Type Guard - if privileges is a property of employee
    if ('privileges' in emp) {
        console.log(`Privileges: ${emp.privileges}`);
    }
    // Type Guard - if startDate is a property of employee
    if ('startDate' in emp) {
        console.log(`Start Date: ${emp.startDate}`);
    }
};

printEmployeeInformation(e1);
printEmployeeInformation({name: 'Manu', startDate: new Date()});

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  // Type Guard for classes
  if (vehicle instanceof Truck) {
      vehicle.loadCargo(45);
  }
};

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse',
    runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
    let speed;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(`Moving at speed: ${speed}`);
};

moveAnimal({type: 'bird', flyingSpeed: 10});


//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}

// We don't know which properties we are going to use or how many of them we need
// We only define that their keys and values should be strings
interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character' }
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital character!'
};

