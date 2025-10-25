"use client";
import { ICards } from "../types/cards";

interface CardProps {
  cards: ICards[];
}

export default function Cards({ cards }: CardProps) {
  return (
    <div className="flex flex-col w-[50vw]">
      {cards.length > 1 && (
        <div className="flex flex-row justify-between">
          {cards.map((card, index) => (
            <div key={index} className="p-2">
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
