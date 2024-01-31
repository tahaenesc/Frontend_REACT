import { useState } from "react"
import { TodoList } from "../TodoList/TodoList"
import { TodoTextBox } from "../TodoTextBox/TodoTextBox"

export function Todos () {
  const [todos, setTodos] = useState([])

  const handleTodoAdd = (text) => {
    setTodos([...todos, text])
  }

  return <>
    <h1>Todos</h1>
    <TodoTextBox addTodo={handleTodoAdd} />
    <TodoList todos={todos} />
  </>
}
