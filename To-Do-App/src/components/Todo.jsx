import { useState } from "react"
import TodoList from './TodoList';
import Form from './Form'
import Footer from "./Footer";

export default function Todo() {
	const [todos, setTodos] = useState([]);
  const todosCompleted = todos.filter((todo) => todo.isDone).length;
  
  return (
    <div className="Todo">
			<Form todos={todos} setTodos={setTodos}/>
			<TodoList todos={todos} setTodos={setTodos}/>
      <Footer completedCount={todosCompleted} totalCount={todos.length}/>
		</div>
  )
}