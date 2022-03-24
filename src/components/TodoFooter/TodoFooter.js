import './TodoFooter.css'


function TodoFooter({todos,onClearCompleted}){

  const completedSize =  todos.filter((todo)=> todo.isCompleted).length;
    return(
        <div className='footer'>
            
            <button className='ButtonDel' onClick={onClearCompleted}>
                Clear
                <span className='span'>{completedSize}/{todos.length} Completed</span>
            </button>
        </div>
    )




}

export default TodoFooter