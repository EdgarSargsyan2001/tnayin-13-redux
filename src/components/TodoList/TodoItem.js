import './TodoItem.css'

function TodoItem({todo,onChange,onDelete}){

    return(
        <div className="Item">
            <label>
                <input type="checkbox" className='InpCheck' checked={todo.isCompleted} onChange={(e)=>{
                    onChange({
                        ...todo,
                        isCompleted:e.target.checked
                    })
                }} />
                {todo.text}
                <button className='DelBut' onClick={() => {
                    onDelete(todo);
                }}>x</button>
            </label>
        </div>
    )

}

export default TodoItem