"use client";

import { useEffect, useState } from "react";

export default function Cards() {
  const [isLoading, setIsLoading] = useState(false);
  const [deckId, setDeckId] = useState("");

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
      console.log("result", result);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex flex-col">
      <button onClick={handleClick}>draw card</button>
    </div>
  );
}
