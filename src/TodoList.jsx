import TodoItem from "./TodoItem.jsx";
import TodoItemEmpty from "./TodoItemEmpty.jsx";

export default function TodoList({ todos }) {
    return (
        <ul className="todo__list">
            {todos.length === 0 && <TodoItemEmpty />}
            {todos.length > 0 &&
                todos.map((todo) =>           
                <TodoItem todo={todo} />
                )
            }
        </ul>
    );
}