const initialInputText = ''

function inputReducer(state={},action){

    if(action.type === "change-text")return action.payload.value
        
    if(action.type === "delete-text")return ''
        
    return state
}


function changeInputText(value){
   return {
        type:"change-text",
        payload:{
            value:value
        }
    }
}

export {
    inputReducer,
    initialInputText,
    changeInputText

}
