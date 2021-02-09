// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    return(
        <div className='todo-list'>
            {props.toDo.map((item)=>(
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button onClick={()=> props.clearTasks()} className='clear-btn'>Clear Tasks</button>
        </div>
    )
}

export default TodoList
