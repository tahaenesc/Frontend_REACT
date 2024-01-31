import { useState } from "react"

export function TodoList ({ todos }) {
  return <>
    <h2>Todo Listesi</h2>
    <ul>
      {
        todos.map(todo => <li>{todo}</li>)
      }
    </ul>
  </>
}
