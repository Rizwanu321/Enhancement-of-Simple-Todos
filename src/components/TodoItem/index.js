import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {item, deleteTodo, editTodo, saveTodo, checkedTodo} = props
  const {isEditing, isChecked, title, id} = item
  const [editTitle, setEditTitle] = useState(title)
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="list">
      <div className="inp-container">
        
        {isEditing ? (
          <input
            id="title"
            type="text"
            className="edit-text-field"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
          />
        ) : (
          <>
          <input
          id="check"
          type="checkbox"
          checked={isChecked}
          onChange={() => checkedTodo(id)}
        />
          <p className={`${isChecked ? 'checked-todo' : ''} todo`}>
            {item.title}
          </p>
          </>
        )}
      </div>
      <div>
        {isEditing ? (
          <button
            type="button"
            onClick={() => saveTodo(id, editTitle)}
            className="btn"
          >
            Save
          </button>
        ) : (
          <button type="button" onClick={() => editTodo(id)} className="btn">
            Edit
          </button>
        )}

        <button type="button" onClick={onDelete} className="btn btn-delete">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
