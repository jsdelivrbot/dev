
  renderTaskSection() {
    //destructure props
    //so wo don't have to use this.props.task
    const {task, isCompleted} = this.props;
    return (
      <td>{task}</td>
    );
  }

//--------------------------------------------------------------//

  renderTaskSection() {
    //react interprets objects into inline styles
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    };

    return (
      <td style={taskStyle}></td>
    );
  }

//--------------------------------------------------------------//
  
  toggleTask(task) {
    //find the clicked on task in the task object
    const foundTodo = _.find(this.state.todo, item => item.task === task);
    //change to false
    foundTodo.isCompleted = !foundTodo.isCompleted;
    //update state
    this.setState{todo: this.state.todo};
  }

//--------------------------------------------------------------//

  //using spread inside react component:
  //{...item} is equivelent to:
  //task={item.task} isCompleted={item.isCompleted}
  <TodoListItem key={index} {...item}/>

  //lodash, return everything but the specified props
  const props = _.omit(this.props, 'todo');

//--------------------------------------------------------------//

  //use dot notatuib fir components stored in an object
  import React from 'react';

  const MyComponents = {
    DatePicker: function DatePicker(props) {
      return <div>Imagine a {props.color} datepicker here.</div>;
    }
  }

  function BlueDatePicker() {
    return <MyComponents.DatePicker color="blue" />;
  }