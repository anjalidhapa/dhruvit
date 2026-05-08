import fs from "fs";

const createFile = (fileName, data) => {
  fs.writeFileSync(fileName, data);
  console.log("File written successfully ");
};

const readFile = (fileName) => {
  const data = fs.readFileSync(fileName, "utf-8");
  console.log(data);
};

const appendFile = (fileName, data) => {
  fs.appendFileSync(fileName, "\n" + data);
  console.log("Data appended successfully");
};

const deleteFile = (fileName) => {
  fs.unlinkSync(fileName);
  console.log("File deleted successfully");
};

console.log(process.argv);
const inputs = process.argv.slice(2);
const command = inputs[0];
const fileName = inputs[1];

switch (command) {
  case "create":
    const data = inputs.slice(2).join(" ");
    console.log(data);
    createFile(fileName, data);
    break;

  case "update":
    const updatedData = inputs.slice(2).join(" ");
    // console.log(updatedData);
    createFile(fileName, updatedData);
    break;

  case "read":
    readFile(fileName);
    break;

  case "append":
    const appendData = inputs.slice(2).join(" ");
    appendFile(fileName, appendData);
    break;

  case "delete":
    deleteFile(fileName);
    break;
}
