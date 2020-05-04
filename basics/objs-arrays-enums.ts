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

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person: {
    name: string;
    age: number;
    hobbies: string[],
    role: Role
} = {
    name: 'Andrew',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

console.log(person.name);