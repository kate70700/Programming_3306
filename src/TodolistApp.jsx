function TodolistApp() {
    return (
        <div>
            <h1>No Think, Do it.</h1>
            <form>
                <input type="text"/>
                <button>Add</button>
            </form>
            <ul>
                <li>
                    <input type="checkbox" id="chk-1" />
                    <label htmlFor="chk-1">think</label>
                    <button>연필</button>
                    <button>X</button>
                    </li>
            </ul>
        </div>
    )
}

export default TodolistApp;