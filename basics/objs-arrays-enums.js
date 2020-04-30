"use strict";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'Andrew',
//     age: 27,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Andrew',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
console.log(person.name);
