import Checkbox from "./Checkbox";
import Button from "./Button";

export default function TodoItem() {
    return (
                        <li className="todo__item todo__item--complete">
                    <Checkbox id="1" />
                    <label htmlFor="chk-1" className="todo__label">think</label>

                    <Button className="todo__edit todo--edit">✎</Button>
                    <Button className="todo__delete todo--delete">✖</Button>
                </li>
    )
}