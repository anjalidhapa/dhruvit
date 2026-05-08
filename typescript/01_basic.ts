// let num = 10;
// console.log(num);

// num = "asdf";
// console.log(num);

// let varName: datatype;
let userName: string = "John";

let secName: string;

secName = "adf";
// secName = 101;

// (): returnType
const getSum = (num1: number, num2: number): number => num1 + num2;

function getDiff(num1: number, num2: number): number {
  return num1 - num2;
}
const getmul = (num1: number, num2: number): number => num1 * num2;

function getdiv(num1: number, num2: number): string{
    return `${num1/num2}`;
}
console.log("sum = ", getSum(2, 3));
console.log("diff = ", getDiff(2, 3));
console.log("Mul = ", getmul(2, 3));
console.log("Div = ",getdiv(4,2));


