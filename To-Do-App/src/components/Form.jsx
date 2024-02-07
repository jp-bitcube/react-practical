import { useState } from "react"
import styles from './form.module.css'

export default function Form({todos, setTodos}) {
	const [todo, setTodo] = useState({ name: '', isDone: false });

	function handleSubmit(e)  {
		e.preventDefault()
		setTodos([...todos, todo]);
		setTodo({ name: '', isDone: false });
	}

    return (
      <form className={styles.todoForm} onSubmit={handleSubmit}>
				<div className={styles.inputContainer}>
					<input className={styles.todoInput} onChange={(e) => setTodo({ name: e.target.value, isDone: false })} value={todo.name} type="text" placeholder="Insert Todo..."/>
					<button className={styles.inputButton} type="submit">Add</button>	
				</div>
    	</form>
    )
}                                                            