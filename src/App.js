import { useDispatch, useSelector } from "react-redux";
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoFooter from './components/TodoFooter/TodoFooter';
import { addList,changeIsCompleted,ClearIsCompletedList,deleteList } from './features/todos/todosSlice';
import './App.css';

function App() {

  const todos =  useSelector((state)=>state.initialTodos)
  const dispatch = useDispatch()


  return (
    <div className='flex'>
      <div className="App">

        <TodoForm onAdd={ (text) => dispatch(addList(text)) }/>
          
          
        <TodoList
          todos = {todos}
          onDelete = {(todo) => dispatch(deleteList(todo))}
          onChange = {(newTodo) => dispatch(changeIsCompleted(newTodo))}
        />


        <TodoFooter
          todos = {todos}
          onClearCompleted = {()=> dispatch(ClearIsCompletedList()) }
        />
            
          
      </div>
    </div>
  )
}

export default App;
