import { FC, useContext } from "react";
import { Context } from "../Store";

export const Player: FC = () => {
  const [state] = useContext(Context);
  return (
    <>
      <div>Player:
        <div>{state.playerName}</div>
        <div>{state.playerCards.map((card, index) => (
          <div key={index}>
            <div>{card.value}{card.suit}</div>
          </div>
        ))}</div>
      </div>
    </>
  );
};