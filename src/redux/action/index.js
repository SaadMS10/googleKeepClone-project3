export const ADD_NOTE_REQUEST ="ADD_NOTE_REQUEST"
export const EDIT_NOTE_REQUEST ="EDIT_NOTE_REQUEST"

const addTodo = (todo) => {
    return{
        type: ADD_NOTE_REQUEST,
        payload:todo
    }

}
const editTodo=(index,updatedTodo)=>{
    return{
        type: EDIT_NOTE_REQUEST,
       payload: {index, updatedTodo}
    }
}

export {
    addTodo,
    editTodo
}