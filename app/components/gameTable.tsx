"use client";

import { useEffect, useState } from "react";
import { checkSnap, handleNewCard, placeHolder } from "../../lib/gameLogic";
import Counter from "./counter";
import SnapSuccess from "./snapSuccess";
import ScoreCard from "./scoreCard";
import { ICards } from "../types/cards";
import Cards from "./cards";
import Buttons from "./buttons";

export default function GameTable() {
  const [isLoading, setIsLoading] = useState(false);
  const [deckId, setDeckId] = useState("");
  const [cards, setCards] = useState<ICards[]>(placeHolder);
  const [snapSuit, setSnapSuit] = useState(0);
  const [snapValue, setSnapValue] = useState(0);
  const [totalCards, setTotalCards] = useState(52);
  const [restart, setRestart] = useState(false);
  const [snapResult, setSnapResult] = useState<ISnapResult | null>(null);

  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => response.json())
      .then((data) => {
        setDeckId(data.deck_id);
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
      <h1>SNAP!</h1>
      {!restart ? (
        <>
          <div className="flex justify-end">
            <Counter totalCards={totalCards} />
          </div>
          {snapResult && <SnapSuccess snapResult={snapResult} />}
          <div className="h-36"></div>
          <div className="flex justify-center items center">
            <Cards cards={cards} />
          </div>
          <div className="my-6">
            <Buttons isLoading={isLoading} handleClick={handleClick} />
          </div>
        </>
      ) : (
        <div className="flex justify-center my-24">
          <ScoreCard
            snapValue={snapValue}
            snapSuit={snapSuit}
            setCards={setCards}
          />
        </div>
      )}
    </div>
  );
}
