"use client";
import { ICards } from "../types/cards";

interface CardProps {
  cards: ICards[];
  isLoading: boolean;
}

export default function Cards({ cards, isLoading }: CardProps) {
  return (
    <div className="flex flex-col w-[50vw]">
      {cards.length < 1 ? (
        <>
          <div className="flex justify-between">
            <div className="border-2 border-gray-700 w-80 h-450px rounded-lg flex justify-center items-center"></div>
            <img
              className="shadow-2xl"
              src="https://deckofcardsapi.com/static/img/back.png"
              alt="card"
              width="350px"
            ></img>
          </div>
        </>
      ) : cards.length == 1 ? (
        <>
          <div className="flex justify-between">
            <div className="border-2 border-gray-700 w-80 h-450px rounded-lg"></div>
            <img
              className="shadow-2xl"
              src={`${cards[0].image}`}
              alt="card"
              width="350px"
            ></img>
          </div>
        </>
      ) : cards.length > 1 ? (
        <>
          <div className="flex flex-row justify-between">
            {cards.map((card, index) => (
              <div key={index} className="rounded-lg">
                <img
                  className="shadow-2xl"
                  src={`${card.image}`}
                  alt="card"
                  width="350px"
                ></img>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
