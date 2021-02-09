import React from 'react'

class ToDoForm extends React.Component{
   
        state={
            task: '',
        }
    
handleChanges= e => {
    this.setState({
        task: e.target.value
    })
}

handleSubmit = e => {
    e.preventDefault()
    this.props.addTask(this.state.task)
    this.setState({task:''})
}


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Task
                <input
                type= 'text'
                name= 'task'
                value={this.state.task}
                onChange={this.handleChanges}
                />
                <button>Add Task</button>
                </label>
            </form>
        )
    }
}
export default ToDoForm;