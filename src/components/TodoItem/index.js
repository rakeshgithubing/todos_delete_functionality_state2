// Write your code here
import './index.css'

const TodoItem = props => {
  const {item, onDeleteTodo} = props
  const {title, id} = item

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="todo-item-container">
      <p className="todo-paragraph">{title}</p>
      <button type="button" className="todo-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
