export interface IStateTypes {
  allCards: TodoList[];
  card: string | number;
  suit: string;
  id: number;
}

export interface TodoList {
  id: number;
  suit: string;
  cards: string | number;
}
