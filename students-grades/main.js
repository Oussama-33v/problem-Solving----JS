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
    if (!AVG) {
        return "student not found"
    }
    return AVG;
}

console.log(calculateAverage('Sara'));
console.log(getStudentResult('Sara'));




function getStudentResult(student) {
    let AVG = calculateAverage(student);
    if (AVG >= 12) return 'Admis';
    else return "Non admis";
}

function getStudentsByField(students, field){
    let stds = [];
    students.forEach(std => {
        if(std.field === field){
            stds.push(std.name);
        }
    });
}
