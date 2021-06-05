import { FC, useReducer, createContext, Dispatch } from 'react';
import { reducer } from './reducer';
import { IStateTypes } from './types/types';

export const initialState: IStateTypes = {
  allCards: [],
  card: "",
  suit: "",
  id: 0
};

export const Store: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
};

export const Context = createContext<[IStateTypes, Dispatch<any>]>([initialState, () => { }]);

