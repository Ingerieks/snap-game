"use client";

import { useEffect, useState } from "react";

export default function Cards() {
  const [isLoading, setIsLoading] = useState(false);
  const [deckId, setDeckId] = useState("");
  const [cards, setCards] = useState([]);
  const [snapSuit, setSnapSuit] = useState(0);
  const [snapValue, setSnapValue] = useState(0);
  const [showCount, setShowCount] = useState(false);
  const [totalCards, setTotalCards] = useState(53);

  function snapCount(card) {
    if (card && card.length > 1) {
      if (card[0]?.value === card[1]?.value) {
        setSnapValue(snapValue + 1);
      }
      if (card[0]?.suit === card[1]?.suit) {
        setSnapSuit(snapSuit + 1);
      }
    }
  }

  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => response.json())
      .then((data) => {
        setDeckId(data.deck_id);
      });
  }, []);

  const handleClick = async () => {
    try {
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
      setCards((prev): any => {
        if (result.cards[0] != undefined) {
          const newItem = result.cards[0];
          const updated = [...prev, newItem];
          if (updated.length > 2 || newItem === undefined) {
            updated.shift();
          }
          snapCount(updated);
          setTotalCards(totalCards - 1);
          console.log(updated, "updated");
          return updated;
        } else {
          return [];
        }
      });
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex flex-col">
      <h1>{totalCards}</h1>
      <h1>{snapSuit}</h1>
      <h1>{snapValue}</h1>
      {}
      <button onClick={handleClick}>draw card</button>
    </div>
  );
}
