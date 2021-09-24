import '../stylesheets/NewTaskForm.css'
import {React, useState} from 'react';

const NewTaskForm = (props) => {

    //    [property, function that updates state] = useState('')
    const [enteredTask, setEnteredTask] = useState('')
    const [enteredProject, setEnteredProject] = useState('')
       
    const taskChangeHandler = (event) => {
        setEnteredTask(event.target.value)
    }

    const projectChangeHandler = (event) => {
        setEnteredProject(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const taskData = {
            task: enteredTask,
            project: enteredProject
        }

        props.onSaveTaskData(taskData)
        setEnteredTask('')
        setEnteredProject('')
        
    }

    return (
        <div>        
            <form onSubmit={submitHandler}>
                <div>                      
                    <input type='text' value={enteredTask} onChange={taskChangeHandler}></input>
                </div>

                <div>
                    <select value={enteredProject} onChange={projectChangeHandler}>
                        <option value='' selected disabled>Choose a Category...</option>
                        <option value='General' selected>General</option>
                        <option value='Chores'>Chores</option>
                        <option value='Schoolwork'>Schoolwork</option>
                        <option value='Health'>Health</option>
                        <option value='Development'>Development</option>
                    </select>                            
                </div>  

            <div className='duration'> 
                       
                <button type='submit'><i className='fas fa-plus'></i></button>
            
            </div>       
            </form>
                
        </div>
        
    )
}

export default NewTaskForm
