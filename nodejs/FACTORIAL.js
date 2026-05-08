// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 3! = 3 * 2 * 1 = 6

// let num = 5;
// let factorial = 1;

// for (let i = num; i >= 1; i--) {
//   factorial = factorial * i;
// }

// console.log(num + "! = " + factorial);

console.log((process.argv));

const getFactorial = (num = 1) => {
    if (num >= 0) {
        let factorial = 1;

        for (let i = 2; i <= num; i++){
            factorial *= i;
        }
        return factorial
    }
    else {
        return -1
    }
}
let num = parseInt(process.argv[2]);
console.log(getFactorial(num));
console.log(getFactorial());
console.log(getFactorial(-3));



