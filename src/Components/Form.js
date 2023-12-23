import React, { useState } from "react"

const InputForm = () => {

    const [taskInput, setTaskInput] = useState("")
    const [tasks, setTasks] = useState([]);
    const [invalidInput, setInvalidInput] = useState(false)
   

    const taskHandler = (event) => {
        setTaskInput(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault()
        if (taskInput.trim() !== "") {
            setTasks([...tasks, taskInput])
            setInvalidInput(false)
        } else {
            setInvalidInput(true)
        }
        setTaskInput("")
        
    };

    const removeHandler = (index) => {
        const updatedTasks = [...tasks]
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks)
    }

   
    const inputClass = invalidInput ? "error-style" : "" ;


    return (
        <div className="App-header">
            <form onSubmit={submitHandler} className="card">
                <div  className="Form-wrap">
                <input
                    className={inputClass}
                    type="text"
                    id="data"
                    value={taskInput}
                    onChange={taskHandler} 
                    placeholder="Type your tasks here..."/>
                    
                <button id="btn" >Add</button>
                </div>
                { invalidInput && <div className="error-row">
                    <p>Please enter a task.</p>
                    </div>}
            </form>
            <div className="List-wrap">
                {tasks.map((tasks, index) => (
                    <div className="list-item" key="index">
                        <ul>
                            <li>{tasks}</li>
                        </ul>
                        <button onClick ={removeHandler} id="btn">Remove</button>
                    </div>                 
                ))}
            </div>
        </div>
    )
}

export default InputForm;