import styles from './todoitem.module.css';

export default function TodoItem({todo, todos, setTodos}) {
    function handleDelete() {
        setTodos(todos.filter((t) => t.name !== todo.name));
    }

    function handleCompleted() {
        setTodos(todos.map((t) => {
            return t.name !== todo.name ? t : { ...t, isDone: !t.isDone };
        }));
    }

    const completedClass = todo.isDone ? styles.itemCompleted : '';

    return (
        <div className={styles.item}>
            <div onClick={handleCompleted} className={styles.itemName}>
                <span className={completedClass}>{todo.name}</span>
            </div>
            <span>
                <button onClick={handleDelete} className={styles.deleteButton}>x</button>
            </span>
        </div>
    );
}