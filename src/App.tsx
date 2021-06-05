import { FC, useContext, useEffect, useCallback } from 'react';
import { Player } from './components/Player';
import { RegisterPage } from './components/RegisterPage';
import { ScoreBoard } from './components/ScoreBoard';
import { ShuffleCards } from './components/ShuffleCards';
import { Context } from './Store';

export const App: FC = () => {
  const [, dispatch] = useContext(Context);

  const loadCards = useCallback(() => {
    let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "B", "V", "H", "A"];
    let suit = ["♦", "♣", "♠", "♥"];
    let allCards = [];

    for (let i = 0; i < cards.length; i++) {
      for (let j = 0; j < suit.length; j++) {
        allCards.push({ "card": cards[i], "suit": suit[j] });
      }
    }

    dispatch({ type: "getAllCards", allCards: allCards });
  }, [dispatch]);

  useEffect(() => {
    loadCards();
  }, [loadCards]);

  return (
    <>
      <RegisterPage />
      <ScoreBoard />
      <Player />
      <ShuffleCards />
    </>
  );
};
