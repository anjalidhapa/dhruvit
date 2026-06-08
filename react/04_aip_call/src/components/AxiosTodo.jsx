import axios from "axios";
import { useEffect, useState } from "react";
import TodoCard from "./TodoCard/TodoCard";

const AxiosTodo = () => {
  const [todos, setTodos] = useState([]);
  const fetchTodoTask = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchTodoTask();
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          id={todo.id}
          task={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default AxiosTodo;
