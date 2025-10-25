"use client";

import { useEffect, useState } from "react";
import { getUpdatedCards } from "../utils/gameHelpers";
import DisplayCards from "./displayCards";
import Counter from "./counter";

export default function Cards() {
  const placeHolder = [
    {
      image: "https://deckofcardsapi.com/static/img/back.png",
      value: 0,
      suit: "none",
    },
  ];
  const [isLoading, setIsLoading] = useState(false);
  const [deckId, setDeckId] = useState("");
  const [cards, setCards] = useState(placeHolder);
  const [snapSuit, setSnapSuit] = useState(0);
  const [snapValue, setSnapValue] = useState(0);
  const [showCount, setShowCount] = useState(false);
  const [totalCards, setTotalCards] = useState(52);
  const [newCardCount, setNewCardCount] = useState(0);

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
      setNewCardCount(newCardCount + 1);
      setCards((prev) => {
        const newCard = result.cards?.[0];
        const { updated, snapResult } = getUpdatedCards(prev, newCard);
        if (updated) {
          if (snapResult.value) setSnapValue(snapValue + 1);
          if (snapResult.suit) setSnapSuit(snapSuit + 1);
          setTotalCards(totalCards - 1);
          return updated;
        }
      });
    } else {
      return result.error;
    }
    setIsLoading(false);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-end">
        <Counter totalCards={totalCards} />
      </div>
      <div className="flex justify-center items center">
        <DisplayCards cards={cards} />
      </div>
      {isLoading ? (
        <h1>Is loading</h1>
      ) : (
        <>
          <button onClick={handleClick}>draw card</button>
        </>
      )}
    </div>
  );
}
