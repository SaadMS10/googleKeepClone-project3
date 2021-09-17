export const ADD_NOTE_REQUEST = "ADD_NOTE_REQUEST";
export const EDIT_NOTE_REQUEST = "EDIT_NOTE_REQUEST";
export const DELETE_NOTE_REQUEST = "DELETE_NOTE_REQUEST";
export const TRASH_NOTE_REQUEST = "TRASH_NOTE_REQUEST";
export const  ARCHIVE_NOTE_REQUEST="ARCHIVE_NOTE_REQUEST"
const addTodo = (todo) => {
  return {
    type: ADD_NOTE_REQUEST,
    payload: todo,
  };
};
const editTodo = (index, updatedTodo) => {
  return {
    type: EDIT_NOTE_REQUEST,
    payload: { index, updatedTodo },
  };
};
const ThrashTodo = (index, val) => {
  return {
    type: TRASH_NOTE_REQUEST,
    payload: { index, val },
  };
};
const ArchiveTodo= (index,val)=>{
  return{
    type: ARCHIVE_NOTE_REQUEST,
    payload:{index,val}
  }
}
const deleteTodo = (index) => {
  return {
    type: DELETE_NOTE_REQUEST,
    payload: index,
  };

};
export { addTodo, editTodo, deleteTodo, ThrashTodo,ArchiveTodo };

