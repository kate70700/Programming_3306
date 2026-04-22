export default function Checkbox(props) {
    const {children, id, ...rest} = props;
    return (
        <>
            <input type="checkbox" id={id} className="todo__check" />
            <label htmlFor={id} className="todo__label">
                {children}
            </label>
        </>
    );
}