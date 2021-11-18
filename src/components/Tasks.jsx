import React from 'react'
import Task from './Task'


const Tasks = (props) => {
    
    const sortedTasks = props.items.sort((a, b) => {
        return b.id - a.id
    })
    
    return (
        <div>
            {sortedTasks.map(
                    (task) => (<Task 
                            id={task.id}
                            title={task.title} 
                            project={task.project} 
                            emoji={task.emoji}
                            deleteTask={props.deleteTask}
                            />))}
            </div>
    )
}

export default Tasks
