import { FC, useContext } from "react";
import { Context } from "../Store";

export const Computer: FC = () => {
  const [state] = useContext(Context);
  return (
    <>
      <div>Computer:
        <div>{state.computerCards.map((card, index) => (
        <div key={index}>
          <div>{card.value}{card.suit}</div>
        </div>
      ))}</div>
      </div>
    </>
  );
};