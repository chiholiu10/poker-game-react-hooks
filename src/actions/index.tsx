
type ACTIONTYPE =
  | {
    type: "getAllCards";
    allCards: Array<any>;
  }
  | {
    type: "addName";
    name: string;
  }
  | {
    type: "shuffleCards";
    randomCards: Array<any>;
  }
  | {
    type: "calculateCards";
    playerCards: Array<any>;
    computerCards: Array<any>;
    bankCards: Array<any>;
  };

export type { ACTIONTYPE };