let num = 10;
console.log(typeof num);

num = 3.1;
console.log(typeof num);

let name = "cosmos";
console.log(typeof name);

let student = {
  // key: value
  name: "hadi",
  std: 10,
  pr: 10,
  isPass: false,
};
console.log("-------------- for in loop ---------------");
for (const k in student) {
  console.log(k, student[k]);
}
console.log("-----------------------------");

console.log(student);
console.log(student.std);
console.log(typeof student);

console.log("-----------------------------");

let arr = [
  10,
  40,
  -3,
  "asdf",
  [3, 1, 2, [4, 3], 32],
  {
    a: "a",
    b: 321,
  },
];

console.log(arr);

console.log(arr[5].b);

console.log(arr[4]);
console.log(arr[4][3]);

console.log("------------- map ----------------");

arr.map((elem, index) => {
  console.log(elem, index);
});
console.log("------------- special ----------------");

console.log(typeof 1);
console.log(typeof NaN);

let ans = parseInt("abcd" + 1);
console.log(ans);
console.log(typeof ans);

console.log(typeof undefined);
console.log(Infinity);
console.log(typeof Infinity);

ans = null;
console.log(ans);
console.log(typeof ans);
