import styles from "./TodoCard.module.css";

const TodoCard = ({ userId, id, task, completed }) => {
  return (
    <div className={`${styles.todoCardStyle}`}>
      <div style={{ padding: "1rem" }}>
        <div
          className={`${styles.todoCardWrapper}  ${completed ? styles.todoCompleted : styles.todoPending}`}
        >
          <div className="id-wrapper">
            <div className="user-id">
              <div className="user-id-title">User ID</div>
              <div className="user-id-value">{userId}</div>
            </div>
            <div className="id">
              <div className="id-title">Task ID</div>
              <div className="id-value">{id}</div>
            </div>
          </div>

          <div className="task">
            <div className="task-value">{task}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
