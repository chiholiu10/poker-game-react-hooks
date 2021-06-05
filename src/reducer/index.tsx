import { ACTIONTYPE } from "../actions";
import { initialState } from "../Store";

export const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "getAllCards":
      return {
        ...state,
        allCards: action.allCards
      };
    case "addName":
      return {
        ...state,
        playerName: action.name
      };
    case "shuffleCards":
      return {
        ...state,
        cardShuffled: action.randomCards
      };
    case "calculateCards":
      return {
        ...state,
        playerCards: action.playerCards,
        computerCards: action.computerCards,
        bankCards: action.bankCards
      };
    default:
      return state;
  }
};

