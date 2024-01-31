import { useState } from "react"

import styles from './TodoTextBox.module.css'

export function TodoTextBox ({ addTodo }) {
  const [textareaValue, setTextareaValue] = useState('')

  const handleTextareaValueChange = (event) => {
    setTextareaValue(event.target.value)
  }

  const handleTodoAddButtonClick = () => {
    addTodo(textareaValue)
  }

  return <div className={styles.todos}>
    <textarea onChange={handleTextareaValueChange} value={textareaValue} rows={5} />
    <button onClick={handleTodoAddButtonClick}>Todo Ekle</button>
  </div>
}
