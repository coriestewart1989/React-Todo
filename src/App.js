import React from 'react';
import uuid from 'uuid-random'
import ToDoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

    state={
     toDo: [],
    }
    
  
  addTask= (newTask) =>{
    const newTDo = {
      task: newTask,
      id: uuid(),
    }
    this.setState({
      toDo:[...this.state.toDo, newTDo]
    })

  }



  toggleItem = (clickedItemId) => {
    const newToDo = this.state.toDo.map((item) => {
      if (item.id === clickedItemId) {
        console.log(clickedItemId)
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    // console.log(newToDo);
    this.setState({
      toDo: newToDo,
    });
  };

  clearTasks = () =>{
    this.setState({
      toDo:[]
    })
  }


  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <ToDoForm addTask={this.addTask}/>
        </div>
        <div>
          <TodoList toDo={this.state.toDo} toggleItem={this.toggleItem} clearTasks={this.clearTasks}/>
        </div>
      </div>
    );
  }
}

export default App;
