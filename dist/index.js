"use strict";
let num = 10;
console.log(num);
let nam = "zain";
let student = "ali";
let temp;
temp = 123;
temp = "asim";
let funct1 = (numb) => {
    console.log(numb);
};
let numArr = [1, 2, '3', true];
let numArr2 = [1, 2, 3];
let numArr5 = [];
numArr5[0] = 'zain';
numArr5[1] = 2;
numArr5[2] = true;
let t1 = [1, "zain"];
t1.push(514);
;
let mySize = 20;
console.log(mySize);
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(1, 2));
function increment(n1, n2) {
    return n1 + (n2 || 1);
}
console.log(increment(10, 2));
console.log(increment(10));
function multiply(n1, n2 = 2) {
    return n1 * n2;
}
console.log(multiply(2, 3));
console.log(multiply(2));
let employee = {
    id: 1,
    name: "zain",
    baseSalary: 1000,
    salary: (basicSal) => {
        return basicSal * 10;
    }
};
console.log(employee);
let e1 = {
    id: 2,
    name: "zarar",
    baseSalary: 2000,
    salary: (basicSal) => {
        console.log(basicSal);
        return basicSal * 10;
    }
};
console.log(e1);
let e2 = {
    id: 3,
    name: "asim",
    baseSalary: 1000,
    salary: (basicSal) => {
        console.log(basicSal);
        return basicSal * 10;
    }
};
console.log(e2);
