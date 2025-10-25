"use client";
import { ICards } from "../types/cards";

interface DisplayPageProps {
  cards: ICards[];
}

export default function DisplayCards({ cards }: DisplayPageProps) {
  return (
    <div className="flex flex-col w-[50vw]">
      {cards.length > 1 && (
        <div className="flex flex-row justify-between">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border-3 border-black rounded-xs p-2 bg-stone-50"
            >
              <img
                className="shadow-xl"
                src={`${card.image}`}
                alt="card"
                width="350px"
              ></img>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
