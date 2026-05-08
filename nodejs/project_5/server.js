import fs from "fs";

// console.log(fs);

fs.writeFileSync("hello.txt", "nodejs !");
fs.writeFileSync("hello.txt", "express !");

// fs.writeFile("hello.txt", "Hello, World! This is a test.", () => {code}); -> async nature, callback function needed

fs.appendFileSync("hello.txt", "\nThis is an appended line.");

// read file
const data = fs.readFileSync("hello.txt", "utf-8");
console.log(data);

fs.unlinkSync("hello.txt");
 
// fs.mkdirSync("myFolder");

// fs.rmdirSync("myFolder");

let files = fs.readdirSync("./");
console.log(files);

// fs.renameSync("myFolder", "myRenamedFolder");

files = fs.readdirSync("./");
console.log(files);

["myRenamedFolder", "myFolder"].map((elem) => {
  fs.rmSync(elem, { recursive: true, force: true });
});

console.log(fs.lstatSync("server.js").isDirectory());
