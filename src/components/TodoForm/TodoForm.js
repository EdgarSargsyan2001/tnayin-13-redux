import { useDispatch, useSelector } from "react-redux";
import {changeInputText} from '../../features/inputText/inputTextSlice'
import './TodoForm.css'

function TodoForm({onAdd}){

    const text = useSelector((state) => state.inputText )
    const dispatch = useDispatch()

    function formSubmit(evt){
        evt.preventDefault();
            
        if(text !== "") {
            onAdd(text)
            dispatch({type:"delete-text"})
                
        }
    }

    return (
        <form onSubmit={(evt)=>formSubmit(evt)}>

            <input 

                type="text" 
                className="formInput" 
                value={text} 
                onChange={(evt)=>{dispatch(changeInputText(evt.target.value))}}
                
            />

            <button className="formButton">Add</button>
        </form>
    )

}


export default TodoForm