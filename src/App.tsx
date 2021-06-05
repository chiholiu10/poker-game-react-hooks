import { FC, useState, useContext, useEffect, useCallback } from 'react';
import { TodoList } from './components/TodoList';
import { Context } from './Store';

export const App: FC = () => {
  const [state, dispatch] = useContext(Context);
  const [inputValue, setInputValue] = useState("");
  const getValue = (target: string) => {
    setInputValue(target);
  };

  console.log(state);

  const addTodo = () => {

    setInputValue("");
  };

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
      <input value={inputValue} onChange={(e) => getValue(e.target.value)} />
      <button onClick={addTodo}>
        Add Todo
      </button>
      <TodoList />
    </>
  );
};
