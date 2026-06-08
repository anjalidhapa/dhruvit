import { useEffect, useState } from "react";
import fetchData from "../services/api";
import TodoCard from "./TodoCard/TodoCard";

const FetchTodo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const setTodo = async () => {
      const temp = await fetchData(
        "https://jsonplaceholder.typicode.com/todos",
      );

      setData(temp);
    };

    setTodo();
  }, []);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <div>
      {data.map((todo) => (
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

export default FetchTodo;