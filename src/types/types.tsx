export interface IStateTypes {
  playerName: string;
  allCards: Cards[];
  cardShuffled: Cards[];
}

export interface Cards {
  id: number;
  suit: string;
  cards: string | number;
}

