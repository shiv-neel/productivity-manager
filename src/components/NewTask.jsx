import React from 'react'
import NewTaskForm from './NewTaskForm'

const NewTask = (props) => {

    const saveTaskDataHandler = (enteredTaskData) => {
       
        props.onAddTask(enteredTaskData)
    }


    return (
        <div>
            <NewTaskForm onSaveTaskData={saveTaskDataHandler} />
        </div>
    )
}

export default NewTask
