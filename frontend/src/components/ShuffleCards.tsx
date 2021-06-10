import { FC, useCallback, useContext, useEffect } from "react";
import { Context } from "../Store";

export const ShuffleCards: FC = () => {
  const [state, dispatch] = useContext(Context);

  const handOutCards = useCallback(() => {
    const handCards = state.cardShuffled;
    const player = [];
    const computer = [];
    const bank = [];
    const playersCards = 4;
    const bankFirstHand = 3;

    for (let i = 0; i < playersCards + bankFirstHand; i++) {
      if (handCards[i] === undefined) return;

      if (i < playersCards) {
        (i % 2 === 0) ? player.push(handCards[i]) : computer.push(handCards[i]);
      } else {
        bank.push(handCards[i]);
      }

      dispatch({
        type: "handOutCards",
        playerCards: player,
        computerCards: computer,
        bankCards: bank
      });
    }
  }, [dispatch, state.cardShuffled]);

  useEffect(() => {
    handOutCards();
  }, [handOutCards, state.cardShuffled]);

  const shuffle = () => {
    const grabCards = state.allCards;
    let randomCards = grabCards.map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);

    dispatch({ type: "shuffleCards", randomCards });
  };

  return (
    <>
      <button onClick={shuffle}>Shuffle Cards</button>
    </>
  );
};