"use client";

import { placeHolder } from "@/lib/gameLogic";
import { ICards } from "../types/cards";

interface ScoreCardPageProps {
  snapValue: number;
  snapSuit: number;
  setCards: ([]: ICards[]) => void;
}

export default function ScoreCard({
  snapValue,
  snapSuit,
  setCards,
}: ScoreCardPageProps) {
  function handlerestart() {
    setCards(placeHolder);
  }

  return (
    <div className="border border-black w-1/6 flex flex-col justify-center items-center">
      <div className="">
        <h1>YOU DID IT!</h1>
      </div>
      <div className="px-2 py-1">
        <h1>SNAP suit score: {snapSuit}</h1>
        <h1>SNAP value score: {snapValue}</h1>
      </div>
    </div>
  );
}
