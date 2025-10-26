"use client";

import { useEffect, useState } from "react";
import { checkSnap, handleNewCard, placeHolder } from "../../lib/gameLogic";
import Counter from "./counter";
import SnapSuccess from "./snapSuccess";
import ScoreCard from "./scoreCard";
import { ICards } from "../types/cards";
import Cards from "./cards";
import Button from "./button";

export default function GameTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState<ICards[]>([]);
  const [snapSuit, setSnapSuit] = useState(0);
  const [snapValue, setSnapValue] = useState(0);
  const [totalCards, setTotalCards] = useState(52);
  const [restart, setRestart] = useState(false);
  const [snapResult, setSnapResult] = useState<ISnapResult | null>(null);
  console.log(cards, "cards");
  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => response.json())
      .then((data) => {
        setDeckId(data.deck_id);
        setIsLoading(false);
      });
  }, []);

  const handleClick = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`,
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

    const result = await response.json();
    if (result.success) {
      const newCard = result.cards?.[0];
      const updated = handleNewCard(cards, newCard) as ICards[];

      const snap = checkSnap(updated);
      setSnapResult(snap);
      setCards(updated);
      if (snapResult?.value) setSnapValue(snapValue + 1);
      if (snapResult?.suit) setSnapSuit(snapSuit + 1);
      setTotalCards(totalCards - 1);
    } else {
      setRestart(true);
      return result.error;
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="">
        <h1 className="mx-12 my-4 text-4xl text-gray-700">SNAP!</h1>
      </div>
      <div className="h-12 mb-12">
        {snapResult && <SnapSuccess snapResult={snapResult} />}
      </div>
      <div className="flex justify-center items center">
        <Cards cards={cards} isLoading={isLoading} />
      </div>
      {restart ? (
        <div className="flex justify-center my-12">
          <ScoreCard snapValue={snapValue} snapSuit={snapSuit} />
        </div>
      ) : (
        <div className="my-12">
          <Button
            restart={restart}
            isLoading={isLoading}
            handleClick={handleClick}
          />
        </div>
      )}

      {cards.length > 1 && (
        <div className="mr-24 flex justify-end">
          <Counter totalCards={totalCards} />
        </div>
      )}
    </div>
  );
}
