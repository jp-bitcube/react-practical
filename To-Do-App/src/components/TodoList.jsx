import TodoItem from './TodoItem';
import styles from './todolist.module.css';

export default function TodoList({ todos, setTodos }) {
	const sortedTodos = todos.slice().sort((a, b) => Number(a.isDone) - Number(b.isDone))
  return (
		<div className={styles.listContainer}>
			{
				sortedTodos.map((t, i) => (
					<TodoItem key={t.name} todo={t} todos={todos} setTodos={setTodos}/>
				))
			}
		</div>
  )
}