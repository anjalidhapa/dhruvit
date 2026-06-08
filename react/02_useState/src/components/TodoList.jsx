import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          title={item.title}
          id={item.id}
          completed={item.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
