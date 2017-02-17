import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";


export default class Featured extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
      message: TodoStore.getMessage()
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
    //golden rule is anything you listen to on mount, unlisten on unmount

    //.listenerCount counts the amounts of active node event listerners
    // if we don't remove the event listener below, there will be a memory leak
    // (new listener for every time state changes because componentWillMount
    //gets called each time)
    console.log("count", TodoStore.listenerCount("change"));
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
      message: TodoStore.getMessage()
    });
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  createTodo() {
    TodoActions.createTodo(Date.now());
  }

  // notification() {
  //   this.setState({
  //     message: TodoStore.notification(),
  //   });
  // }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <span> {this.state.message}</span>
        <br/><br/>
        <button onClick={this.createTodo.bind(this)}>Create</button>
        <input />
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
