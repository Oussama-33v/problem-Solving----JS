import { students } from "./data.js";



function calculateAverage(student) {
    let SOMME = 0
    let AVG = 0;
    students.forEach((s) => {
        if (s.name === student) {
            s.grades.forEach(grad => {
                SOMME += grad
            })
            AVG = SOMME / s.grades.length
        }
    })
    return AVG
}

console.log(calculateAverage('Sara'));
