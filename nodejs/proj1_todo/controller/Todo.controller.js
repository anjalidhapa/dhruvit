import { LocalStorage } from "node-localstorage";

const ls = new LocalStorage("/scratch");
// create todo
const createTodo = async (req, res) => {
  let { id, task, completed } = req.body;

  //   if (completed) {
  //     completed = true;
  //   } else {
  //     completed = false;
  //   }
  console.log(`completed = ${completed}`);
  completed = completed ? true : false;
  console.log(`completed = ${completed}`);

  // get previous todos and parse JSON
  let prevTodos = ls.getItem("todos");
  prevTodos = prevTodos ? JSON.parse(prevTodos) : [];
  console.log(prevTodos);

  // add new todo
  const newTodo = { id, task, completed };
  prevTodos.push(newTodo);

  // save updated todos
  ls.setItem("todos", JSON.stringify(prevTodos));

  console.log(ls.getItem("todos")); // now it will show proper JSON string
  res.json({ message: "todo created", todos: prevTodos });
};

const clearAll = async (req, res) => {
  ls.removeItem("todos");
  res.status(200).json({ message: "all todos cleared" });
};

// Update todo by ID
const updateTodo = async (req, res) => {
  const todoId = parseInt(req.params.id); // get id from URL
  const { task, completed } = req.body;
  let todos = ls.getItem("todos");
  todos = todos ? JSON.parse(todos) : [];

  const index = todos.findIndex((t) => t.id === todoId);

  if (index === -1) {
    return res
      .status(404)
      .json({ message: `Todo with id ${todoId} not found` });
  }

  // update fields only if provided
  if (task !== undefined) todos[index].task = task;
  if (completed !== undefined)
    todos[index].completed = completed ? true : false;

  // save updated todos
  ls.setItem("todos", JSON.stringify(todos));

  res.json({ message: `Todo with id ${todoId} updated`, todos });
};
export { createTodo, clearAll, updateTodo };

// ternary: used in line no 14
//   if (condition) {
//     code 1;
//   } else {
//     code 2;
//     }
//     condition ? code 1 : code 2;
