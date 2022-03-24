import  { combineReducers, createStore } from 'redux' ;
import {inputReducer,initialInputText} from '../features/inputText/inputTextSlice'
import {todosReduser,initialTodos} from '../features/todos/todosSlice'



const store = createStore(combineReducers({
  inputText:inputReducer,
  initialTodos:todosReduser

}),{
    inputText:initialInputText,
    initialTodos:initialTodos
})


export default store