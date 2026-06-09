import styles from "./TodoCard.module.css";

const TodoCard = ({ userId, id, task, completed }) => {
  return (
    <div className={`${styles.todoCardStyle}`} style={{ padding: "1rem" }}>
      <div>
        <div
          className={`${styles.todoCardWrapper}  ${completed ? styles.todoCompleted : styles.todoPending}`}
        >
          <div className={styles.idWrapper}>
            <div className={styles.userId}>
              <div className={styles.userIdTitle}>User ID</div>
              <div className={styles.userIdValue}>{userId}</div>
            </div>
            <div className={styles.id}>
              <div className={styles.idTitle}>Task ID</div>
              <div className={styles.idValue}>{id}</div>
            </div>
          </div>

          <div className={styles.task}>
            <div className={styles.taskValue}>{task}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;


