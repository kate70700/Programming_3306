import Checkbox from "./Checkbox";
import Button from "./Button";

export default function TodoItem({todo}) {
    return (
                    <li className={`todo__item ${todo.completed ? 'todo__item--complete' : ''}`}>
                    <Checkbox id={todo.id}>{todo.text}</Checkbox>
                    <Button className="todo__edit todo--edit">✎</Button>
                    <Button className="todo__delete todo--delete">✖</Button>
                </li>
    )
}