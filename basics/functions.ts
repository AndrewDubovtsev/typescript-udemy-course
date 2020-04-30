const add = (n1: number, n2: number): number => {
   return n1 + n2;
};

const printResult = (num: number): void => {
    console.log('Result: ' + num);
};

let combineValues: (a: number, b: number) => number;
combineValues = add;

const addHAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
    const result = n1 + n2;
    cb(result);
};

console.log(combineValues(8, 8));

addHAndHandle(10, 20, (result) => {console.log(result);});