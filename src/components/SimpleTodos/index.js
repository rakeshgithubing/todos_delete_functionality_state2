import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    array: initialTodosList,
  }

  onDeleteTodoItem = id => {
    const {array} = this.state
    const filteredData = array.filter(each => each.id !== id)
    return this.setState({
      array: filteredData,
    })
  }

  render() {
    const {array} = this.state

    return (
      <div className="bg-container">
        <div className="todo-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="unordered-items">
            {array.map(eachObj => (
              <TodoItem
                item={eachObj}
                key={eachObj.id}
                onDeleteTodo={this.onDeleteTodoItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
