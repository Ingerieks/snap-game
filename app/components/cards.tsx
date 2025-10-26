"use client";
import { ICards } from "../types/cards";
import { LoadingSpinner } from "./loadingSpinner";

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
            <div className="flex items-center">
              {isLoading && <LoadingSpinner />}
            </div>
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
            <div className="flex items-center">
              {isLoading && <LoadingSpinner />}
            </div>
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
          <div className="flex flex-row justify-between items-center">
            {cards[0] && (
              <div className="rounded-lg">
                <img
                  className="shadow-2xl"
                  src={cards[0].image}
                  alt="card"
                  width="350px"
                />
              </div>
            )}

            {isLoading && <LoadingSpinner />}

            {cards[1] && (
              <div className="rounded-lg">
                <img
                  className="shadow-2xl"
                  src={cards[1].image}
                  alt="card"
                  width="350px"
                />
              </div>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
