export interface IStateTypes {
  playerName: string;
  allCards: Cards[];
  cardShuffled: Cards[];
  playerCards: Cards[];
  computerCards: Cards[];
  bankCards: Cards[];
}

export interface Cards {
  id: number;
  suit: string;
  cards: string | number;
}

