import { useState } from 'react';
import './todolist.css';

import TodoHeader from './TodoHeader';
import TodoAdder from './TodoAdder';
import TodoList from './TodoList';

class Todo {
    constructor(text) {
        this.id = Date.now();
        this.text = text;
        this.isCompleted = false;
    }
}

function TodolistApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos((prev) => [...prev, new Todo(text)]);
    };

    const toggleTodo = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            )
        );
    };

    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
    );
}

export default TodolistApp;