import { ADD_NOTE_REQUEST, EDIT_NOTE_REQUEST } from "../action";

const initialState = {
  todoList: [],
  loader: false,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE_REQUEST:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case EDIT_NOTE_REQUEST:
      let cloneTodoList = [...state.todoList];
      cloneTodoList[action.payload.index] = {
        ...cloneTodoList[action.payload.index],
        ...action.payload.updatedTodo,
      };
      return {
        ...state,
        todoList: cloneTodoList,
      };

    // const todos = Object.values(state)[0]

    //    return todos.map((todo,index)=>{
    //         if(action.payload.id=== todo.id){
    //             return{

    //             ...todo,
    //             title: action.payload.title,
    //             desc: action.payload.desc
    //             }
    //         }

    // })

    default:
      return {
        ...state,
      };
  }
};
