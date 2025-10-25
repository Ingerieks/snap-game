"use client";

import { useEffect, useState } from "react";
import { getUpdatedCards, placeHolder } from "../utils/gameHelpers";
import DisplayCards from "./displayCards";
import Counter from "./counter";
import SnapSuccess from "./snapSuccess";
import ScoreCard from "./scoreCard";
import { ICards } from "../types/cards";
import { IUpdatedCard } from "../types/updatedCards";

export default function Cards() {
  const [isLoading, setIsLoading] = useState(false);
  const [deckId, setDeckId] = useState("");
  const [cards, setCards] = useState<ICards[]>(placeHolder);
  const [snapSuit, setSnapSuit] = useState(0);
  const [snapValue, setSnapValue] = useState(0);
  const [totalCards, setTotalCards] = useState(52);
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => response.json())
      .then((data) => {
        setDeckId(data.deck_id);
      });
  }, []);

  const handleClick = async () => {
    if (isLoading) {
      console.log("returning in isLoading block", isLoading);
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
      const { updated, snapResult } = getUpdatedCards(
        cards,
        newCard
      ) as IUpdatedCard;
      if (updated) {
        setCards(updated);
        if (snapResult.value) setSnapValue(snapValue + 1);
        if (snapResult.suit) setSnapSuit(snapSuit + 1);
        setTotalCards(totalCards - 1);
      }
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
          <div className="h-36">
            <SnapSuccess cards={cards} />
          </div>
          <div className="flex justify-center items center">
            <DisplayCards cards={cards} />
          </div>
          <div className="my-6">
            {isLoading ? (
              <div className="flex justify-center">
                <button
                  className="border-3 border-black rounded-xs p-1 bg-stone-200"
                  onClick={handleClick}
                >
                  loading
                </button>
              </div>
            ) : (
              <div className="flex justify-center">
                <button
                  className="border-3 border-black rounded-xs p-1 bg-stone-200"
                  onClick={handleClick}
                >
                  draw card
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex justify-center my-24">
          <ScoreCard snapValue={snapValue} snapSuit={snapSuit} />
        </div>
      )}
    </div>
  );
}
