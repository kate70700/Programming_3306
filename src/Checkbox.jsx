export default function Checkbox(props) {
    return (
        <>
            <input type="checkbox" id={props.id} className="todo__check" />
            <label htmlFor={props.id} className="todo__label">
                {props.label}
            </label>
        </>
    );
}