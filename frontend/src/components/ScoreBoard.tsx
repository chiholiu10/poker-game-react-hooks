import { FC, useCallback, useContext, useEffect } from "react";
import { Context } from "../Store";

export const ScoreBoard: FC = () => {
  const [state] = useContext(Context);


  const calculateScore = useCallback(() => {
    let sortedCards = [...state.bankCards];
    let player = [...state.playerCards];
    let cardCheck = [];
    for (let i = 0; i < sortedCards.length; i++) {
      for (let j = 0; j < player.length; j++) {
        if (sortedCards[i].value === player[j].value) {
          cardCheck.push(player[j]);
        }
        else {
          console.log('test');
        }
      }
    }
  }, [state.bankCards, state.playerCards]);

  useEffect(() => {
    calculateScore();
  }, [calculateScore]);


  return (
    <>Calculate Score</>
  );
};