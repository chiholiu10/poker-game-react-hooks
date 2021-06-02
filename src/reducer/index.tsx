import { ACTIONTYPE } from "../actions";
import { initialState } from "../Store";

export const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "addTodo":
      return {
        value: state.value,
        todoList: [...state.todoList, action.payload]
      };
    default:
      return state;
  }
};