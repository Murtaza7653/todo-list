import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
export default function TodoList() {
    // State Array that holds all TODOs
    const [todos, setTodos] = useState([]);

    // Add TODO to list
    const addTask = task => {
        if (!task.text) {
            return
        }

        const newTodos = [task, ...todos];
        setTodos(newTodos);
    }

    // Remove TODO from list
    const removeTask = id => {
        let updatedTasks = [...todos].filter(task => task.id !== id)
        setTodos(updatedTasks)
    }

    // Task is completed
    const completeTask = id => {
        let updatedTasks = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updatedTasks)
    }


    return <div>
        <TodoForm addTask={addTask}></TodoForm>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
    </div>;
}
