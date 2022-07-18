import React, { useState } from 'react';

export default function TodoForm(props) {
    // State
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask({
            id: Math.floor(Math.random() * 1000000),
            text: input,
            isComplete: false
        })
        setInput('');
    }

    return (

        <form className='my-4'>
            <h1>TODO List</h1>
            <div className="my-3">
            <input type="text" placeholder="Add a task" className="form-control mx-5" onChange={handleChange} value={input} name="text" id="todo" style={{fontSize:"1.25rem", width: "75%", float: "left" }} />
            <button type="submit" className="btn btn-success" onClick={handleSubmit}>Add Task to List</button>
        </div>
        </form >

    );
}
