import React from "react";
import { useState } from "react";
import AddTask from "../components/addtask";
import Header from "../components/Header";
import Tasks from "../components/Tasks";


const App = () =>{

    const [tasks, setTasks]= useState(

        [
            {
            id:1,
            title:"doctor appointment",
            day: '12 de febrero',
            reminder: true
            },
            {
            id:2,
            title:"doctor appointment",
            day: '12 de febrero',
            reminder: true
            },
            {
            id:3,
            title:"doctor appointment",
            day: '12 de febrero',
            reminder: true
            },
        ]
    )

    //Add Task
    const addTask=(task)=>{
        const id= Math.floor(Math.random() * 10000) + 1;
        const newTask = {id,...task}
        setTasks([...tasks,newTask])
        console.log(task)


    }

    //Delete Task
    const deletTask = (id) =>{
       setTasks(
           tasks.filter((task)=>task.id !== id)
       )

    }

    //toggle reminder
    const taskReminder= (id) =>{
        setTasks(tasks.map((task)=> task.id===id ? {...task, reminder: !task.reminder}: task))

    }

    return(
        <div className='container'>
            <Header title= 'Task Tracker'/>
            <AddTask onAdd={addTask}/>

            {
                tasks.length  > 0 ? (<Tasks tasks= {tasks} onDelete={deletTask} onToggle={taskReminder} />):('Nothing to Show')

            }
            
        </div>

    )
}


export default App;