
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

  //using spread inside react component:
  //{...item} is equivelent to:
  //task={item.task} isCompleted={item.isCompleted}
  <TodoListItem key={index} {...item}/>

//--------------------------------------------------------------//
