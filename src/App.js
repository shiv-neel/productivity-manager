import {React, useState} from 'react'

import './App.css'
import TitleBlock from './components/TitleBlock'
import Tasks from './components/Tasks'
import NewTaskForm from './components/NewTaskForm'

const SAMPLE_TASKS = [
  {
    id: 0,
    title: 'Laundry',
    project: 'Chores',
    emoji: '🧺'
  },
  {
    id: 1,
    title: 'Homework',
    project: 'School',
    emoji: '📝'
  },
  {
    id: 2,
    title: 'Leg Day',
    project: 'Health',
    emoji: '❤️'
  },
  {
    id: 3,
    title: 'Making Dinner',
    project: 'Chores',
    emoji: '🧺'
  }
]


function App() {

  const [tasks, setTasks] = useState(SAMPLE_TASKS)
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  return (
    <div className="App">
      <TitleBlock/>
      <NewTaskForm tasks={tasks} setTasks={setTasks}/>
      <Tasks items={tasks} deleteTask={deleteTask}/>
    </div>
    
  );
}

export default App
