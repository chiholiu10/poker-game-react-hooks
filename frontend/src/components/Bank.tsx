import { FC, useContext } from "react";
import { Context } from "../Store";

export const Bank: FC = () => {
  const [state] = useContext(Context);
  return (
    <>
      <div>Bank:
      <div>{state.bankCards.map((card, index) => (
        <div key={index}>
          <div>{card.value}{card.suit}</div>
        </div>
      ))}</div>
      </div>
    </>
  );
};