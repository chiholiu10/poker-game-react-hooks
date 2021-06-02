import { FC, useReducer, createContext, Dispatch } from 'react';
import { reducer } from './reducer';
import { IStateTypes } from "./types/types";
import { App } from './App';

export const initialState: IStateTypes = {
  value: "",
  todoList: []
};

export const Store: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <Context.Provider value={[state, dispatch]}>
      <App />
    </Context.Provider>
  );
};

export const Context = createContext(initialState);