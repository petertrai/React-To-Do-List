import React from 'react'
import TodoList from './TodoList'
import Form from './Form'


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
      ]
    }
  }
  handleAdd = (task) => {

    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
     ...this.state, todos: [...this.state.todos, newTodo]
    })
  }

  handleClear = () => {
    console.log('clear');
    this.setState({
      ...this.state, todos: this.state.todos.filter(todo => {
        if (!todo.completed) return todo
      })
    })
  }

  handleToggle = (id) => {
    console.log(id);

    this.setState({
     ...this.state, todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed }
      } return todo
      
     })
    })
  }


  render() {
    const { todos } = this.state


    return (
      <div>
        <TodoList todos={todos} handleToggle={this.handleToggle}/>
        <Form todos={todos} handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    )
  }
}
