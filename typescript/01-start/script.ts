// const num1 = document.getElementById('num1') as HTMLInputElement;
// const num2 = document.getElementById('num2') as HTMLInputElement
// const button = document.getElementById('button') as HTMLButtonElement;

// function addNumbers(n1: number, n2: number): number {
//     return n1 + n2;
// }

// button?.addEventListener('click', function(e: MouseEvent) {
//     e.preventDefault();
//     alert(addNumbers(+num1?.value, +num2?.value))
// })

// const username: string = "Feras"
// const age: number = 30

// const students: string[] = ['Feras', 'Onurcan', 'Aisha', 'Sildi', 'Tunc'];

let age: number | string = 30 // Thirty
age = "Thirty"

type Student = {
    name: string;
    class: string;
    email?: string; // ? means optional
}

const feras: Student = {
    name: "Feras",
    class: "Web Development",
}

const students: Student[] = [
    {
        name: "Feras",
        class: "Web Development",
        email: "feras.jobeir@develhope.co",
    },
    {
        name: "Aisha",
        class: "Web Development",
        email: "aisha@develhope.co"
    }
]

type Ages = (number | string)[]
const ages: Ages = ["Thirteen", 30, "Four"]