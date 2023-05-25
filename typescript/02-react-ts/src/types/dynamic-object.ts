export type Dynamic<T> = {
    [key: string]: T;
}

const person: Dynamic<string> = {
    name: "Feras"
}
const numbers: Dynamic<Dynamic<number> | string | false> = {
    person: {
        value1: 30,
        value2: 40,
    },
    another: {
        v2: 324
    },
    name: "Feras",
    smoking: false
}

console.log(person, numbers);