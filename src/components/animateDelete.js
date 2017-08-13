import React, { Component } from "react";

class AnimateDelete extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo(text) {
    let id = Date.now();
    let active = false;
    let newTodos = this.state.todos.concat({ text, id, active });
    this.setState({ todos: newTodos });
  }

  deleteTodo(index) {
    setTimeout(() => {
      this.state.todos.splice(index, 1);
      this.setState({ todos: this.state.todos });
    }, 200);
  }

  updateActive(index) {
    let newTodos = this.state.todos.slice();
    newTodos[index].active = true;
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div>
        <TodoCreate addTodo={this.addTodo.bind(this)} />
        <TodoView
          todos={this.state.todos}
          updateActive={this.updateActive.bind(this)}
          todoDelete={this.deleteTodo.bind(this)}
        />
      </div>
    );
  }
}

class TodoCreate extends Component {
  addTodo(event) {
    this.props.addTodo(this.input.value);
    this.input.value = "";
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.addTodo.bind(this)}>
        <input type="text" ref={input => (this.input = input)} />
      </form>
    );
  }
  componentDidMount() {
    this.input.focus();
  }
}

class TodoView extends Component {
  todoDelete(index) {
    this.props.todos[index].text = "";
    this.props.updateActive(index);
    this.props.todoDelete(index);
  }
  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) => {
          return (
            <div
              style={{
                border: "1px solid black",
                visibility: todo.active ? "hidden" : "inherit",
                height: todo.active ? "0" : "30px",
                transition: "height 300ms"
              }}
              key={todo.id}
            >
              <label>
                {todo.text}
              </label>
              <button value={index} onClick={this.todoDelete.bind(this, index)}>
                x
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AnimateDelete;
