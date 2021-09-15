import {
  ADD_NOTE_REQUEST,
  EDIT_NOTE_REQUEST,
  DELETE_NOTE_REQUEST,
  TRASH_NOTE_REQUEST,
} from "../action";

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
    case TRASH_NOTE_REQUEST:
      let TodoList = [...state.todoList];
      TodoList[action.payload.index] = {
        ...TodoList[action.payload.index],
        isTrashed: action.payload.val,
      };
      return {
        ...state,
        todoList: TodoList,
      };
    case DELETE_NOTE_REQUEST:
      let deletedstate = [...state.todoList];
      deletedstate.splice(action.payload, 1);

      return {
        ...state,
        todoList: deletedstate,
      };
    default:
      return {
        ...state,
      };
  }
};
