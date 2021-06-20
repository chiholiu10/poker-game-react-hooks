import { FC, useCallback, useContext, useEffect } from "react";
import { Context } from "../Store";

export const ScoreBoard: FC = () => {
  const [state] = useContext(Context);

  const calculateScore = useCallback(() => {
    let playerCombo: any = [...state.playerCards.concat(state.bankCards)];
    let computerCombo = [...state.computerCards.concat(state.bankCards)];

    let suitCounter: any = {};
    let valueCounter: any = {};
    playerCombo.forEach((item: { suit: number | string; value: number | string; }) => {
      suitCounter[item.suit] = (suitCounter[item.suit] || 0) + 1;
      valueCounter[item.value] = (valueCounter[item.suit] || 0) + 1;
    });
  }, [state.playerCards, state.computerCards]);

  useEffect(() => {
    calculateScore();
  }, [calculateScore]);


  return (
    <>Calculate Score</>
  );
};