import { useState } from 'react';
import './todolist.css'
// import TodoItemEmpty from '.TodoItemEmpty.jsx'
// import Button from '.Button.jsx'
// import Checkbox from '.Checkbox.jsx'
import TodoHeader from '.TodoHeader.jsx'
import TodoAdder from '.TodoAdder.jsx'
// import TodoItem from '.TodoItem.jsx'
import TodoList from '.TodoList.jsx'

class Todo {
    constructor(text) {
        this.id = Date.now();   //할일 id: 고유의 값 == new Date().getTime()
        this.text = text;       //할일의 내용
        this.isCompleted = false; //할일 완료 여부
    }
}

function TodoListApp() {
    const [todos, setTodos] = useState([]);
    const addTodo = (text) => setTodos((todos) => [
        //이전 todos 복사
        ...todos,
        //newTodo 만들어서
        //뒤에 추가하자
        new Todo(text)
    ]);

    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    )
}

export default TodoListApp;