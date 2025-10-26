"use client";

import { ICards } from "../types";
import Button from "./button";

interface ScoreCardPageProps {
  snapValue: number;
  snapSuit: number;
  deckId: string | null;
  setCards: ([]: ICards[]) => void | null;
  setTotalCards: (n: number) => void | null;
  totalCards: number;
}

export default function ScoreCard({
  snapValue,
  snapSuit,
  deckId,
  setCards,
  setTotalCards,
  totalCards,
}: ScoreCardPageProps) {
  async function handleClick() {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      console.log({ "api error": await response.text() });
      throw new Error(`Error! status: ${response.status}`);
    }

    setCards([]);
    setTotalCards(52);
  }

  return (
    <div className="border border-gray-200 shadow-md rounded-md w-1/6 flex flex-col justify-center items-center">
      <div className="px-6 py-4 text-xl">
        <h1>SNAP suit score: {snapSuit}</h1>
        <h1>SNAP value score: {snapValue}</h1>
        <div className="my-4">
          <Button totalCards={totalCards} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
