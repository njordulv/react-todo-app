import { useState } from "react"
import {
  RiTodoFill,
  RiDeleteBin2Fill,
  RiCheckFill,
  RiEditFill,
  RiSave3Fill,
} from "react-icons/ri"
import styles from "./Todo.module.scss"

function Todo({ todo, deleteTodo, toggleTodo }) {
  const [inputValue, setInputValue] = useState(todo.text)
  const [inputEdit, setInputEdit] = useState(false)

  const handleInputChange = (e) => {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  const handleInputEdit = () => {
    setInputEdit(true)
  }

  const handleInputSave = () => {
    setInputEdit(false)
  }

  return (
    <div
      className={`${styles.item} ${
        todo.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <div className={styles.itemLeft}>
        <RiTodoFill className={styles.todoIcon} />
        {inputEdit ? (
          <input
            key="input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        ) : (
          <span key="text">{inputValue}</span>
        )}
      </div>
      <div className={styles.itemRight}>
        {inputEdit ? (
          <button
            className={`${styles.btnIcon} ${styles.btnEdit}`}
            onClick={handleInputSave}
            title="save"
          >
            <RiSave3Fill className={styles.todoIconDel} />
          </button>
        ) : (
          <button
            className={`${styles.btnIcon} ${styles.btnEdit}`}
            onClick={handleInputEdit}
            title="edit"
          >
            <RiEditFill className={styles.todoIconDel} />
          </button>
        )}
        <button
          className={`${styles.btnIcon} ${styles.btnDel}`}
          title="delete"
          onClick={() => deleteTodo(todo.id)}
        >
          <RiDeleteBin2Fill className={styles.todoIconDel} />
        </button>
        <button
          className={`${styles.btnIcon} ${styles.btnCheck}`}
          title="complete"
          onClick={() => toggleTodo(todo.id)}
        >
          <RiCheckFill className={styles.todoIconCheck} />
        </button>
      </div>
    </div>
  )
}

export default Todo
