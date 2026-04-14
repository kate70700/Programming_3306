import "./todolist.css";
import TodoHeader from "./TodoHeader.jsx";
import TodoItemEmpty from "./TodoItemEmpty.jsx";
import Checkbox from "./Checkbox.jsx";
import Button from "./Button.jsx";
import TodoAdder from "./TodoAdder.jsx";
import TodoItem from "./TodoItem.jsx";
import TodoList from "./TodoList.jsx";

function TodolistApp() {
    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder />
            <TodoList />
        </div>
    );
}

export default TodolistApp;