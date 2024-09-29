import {useState} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isChecked: false,
    isEditing: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isChecked: false,
    isEditing: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isChecked: false,
    isEditing: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isChecked: false,
    isEditing: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    isChecked: false,
    isEditing: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    isChecked: false,
    isEditing: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isChecked: false,
    isEditing: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isChecked: false,
    isEditing: false,
  },
]

const SimpleTodo = () => {
  const [usersDetailsList, setUsersDetailsList] = useState(initialTodosList)
  const [newTodoTitle, setNewTodoTitle] = useState('')

  const onDeleteTodo = id => {
    const filteredTodo = usersDetailsList.filter(each => each.id !== id)
    setUsersDetailsList(filteredTodo)
  }
  const onAddTodo = () => {
    const parts = newTodoTitle.split(' ')
    const lastPart = parts[parts.length - 1]
    const count = Number.isNaN(lastPart) ? 1 : parseInt(lastPart)
    const title = Number.isNaN(lastPart) ? newTodoTitle : parts.slice(0, -1).join(' ')
    for (let i = 1; i <= count; i += 1) {
      setUsersDetailsList(prev => [
        ...prev,
        {
          id: usersDetailsList.length + i,
          title,
          isChecked: false,
          isEditing: false,
        },
      ])
    }
    setNewTodoTitle('')
  }
  const onEditTodo = id => {
    setUsersDetailsList(prev =>
      prev.map(e => (e.id === id ? {...e, isEditing: true} : e)),
    )
  }

  const onSaveTodo = (id, title) => {
    setUsersDetailsList(prev =>
      prev.map(e => (e.id === id ? {...e, title, isEditing: false} : e)),
    )
  }
  const onCheckedTodo = id => {
    setUsersDetailsList(prev =>
      prev.map(e => (e.id === id ? {...e, isChecked: !e.isChecked} : e)),
    )
  }

  console.log(usersDetailsList)
  return (
    <div className="bgContainer">
      <div className="todosContainer">
        <h1 className="heading">Simple Todos</h1>
        <div className="input-container">
          <input
            id="username"
            type="text"
            placeholder="Enter Todo Title"
            className="text-field"
            value={newTodoTitle}
            onChange={e => setNewTodoTitle(e.target.value)}
          />
          <button type="button" onClick={onAddTodo} className="add-btn">
            Add Todo
          </button>
        </div>
        {usersDetailsList.length > 0 ? (
          <ul className="list-container">
            {usersDetailsList.map(eachItem => (
              <TodoItem
                item={eachItem}
                key={eachItem.id}
                deleteTodo={onDeleteTodo}
                editTodo={onEditTodo}
                saveTodo={onSaveTodo}
                checkedTodo={onCheckedTodo}
              />
            ))}
          </ul>
        ) : (
          <p className="no-todos">No Todos</p>
        )}
      </div>
    </div>
  )
}

export default SimpleTodo
