import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default function TodoList() {

    let initTodo;
    if (localStorage.getItem("todos")===null) {
        initTodo = [];
    } else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    const [todos, setTodos] = useState(initTodo);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const addTask = task => {
        if (!task.text) {
            return
        }

        const newTodos = [...todos, task];
        setTodos(newTodos);
        
    }

    const removeTask = id => {
        let updatedTasks = [...todos].filter(task => task.id !== id)
        setTodos(updatedTasks);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

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
