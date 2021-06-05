import { FC, useReducer, createContext, Dispatch } from 'react';
import { reducer } from './reducer';
import { IStateTypes } from './types/types';

export const initialState: IStateTypes = {
  playerName: "",
  allCards: [],
  cardShuffled: []
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

