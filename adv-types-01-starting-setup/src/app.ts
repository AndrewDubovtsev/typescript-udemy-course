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

const add = (a: Combinable, b: Combinable) => {
  // Type Guard - we either concatenate strings or add mathematically
  if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
  }
  return a + b;
};

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