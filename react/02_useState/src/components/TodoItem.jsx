const TodoItem = ({ title, id, completed }) => {
  return (
    <div
      className="todo-item"
      style={
        completed
          ? { textDecoration: "line-through", color: "green" }
          : { color: "red" }
      }
    >
      {id}. {title}
    </div>
  );
};

export default TodoItem;
