import { ACTIONTYPE } from "../actions";
import { initialState } from "../Store";

export const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "getAllCards":
      return {
        ...state,
        allCards: action.allCards
      };
    default:
      return state;
  }
};

