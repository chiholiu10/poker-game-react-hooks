
type ACTIONTYPE =
  | { type: "getAllCards"; allCards: Array<any>; }
  | { type: "addName"; name: string; }
  | { type: "shuffleCards"; randomCards: Array<any>; };

export type { ACTIONTYPE };