
const initialTodos = [ 

    {
      id:Math.random(),
      text:"Learn React",
      isCompleted:false
    },
    {
      id:Math.random(),
      text:"Learn JS",
      isCompleted:false

    },
    {
      id:Math.random(),
      text:"Learn CSS",
      isCompleted:false
    },
]

function todosReduser(state={},action){

    if(action.type === "add-list"){
      return(
        [
          ...state,
          action.payload.value
        ]
      )

    }
  
    if(action.type === "filter-list"){
  
      return state.filter((t) => t.id !== action.payload.value.id)
  
    }
  

    if(action.type ==="change-IsCompleted"){
  
      return state.map((todo) => {
  
        if(todo.id === action.payload.value.id){
          return action.payload.value
        } 
  
        return todo
  
      })
  
    }
  
    if(action.type === "Clear-isCompletedList"){
  
      return state.filter((todo) => !todo.isCompleted) 
  
    }
  

  return state


}



function addList(text){
    return {
        type:"add-list",
        payload:{
                value:{
                    id: Math.random(),
                    text: text,
                    isCompleted: false
                }
        }
    }
}

function deleteList(todo){
    return {
                type:"filter-list",
                payload:{
                    value:todo
                }

            }
}
function changeIsCompleted(newTodo){
    return  {
                type:"change-IsCompleted",
                payload:{
                    value:newTodo
                }
            }
}
function ClearIsCompletedList(){
    return { type:"Clear-isCompletedList" }
    
}

export{
  initialTodos,
  todosReduser,
  addList,
  deleteList,
  changeIsCompleted,
  ClearIsCompletedList,
}