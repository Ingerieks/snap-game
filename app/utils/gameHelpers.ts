import { ICards } from "../types/cards";
import { IUpdatedCard } from "../types/updatedCards";

export function getSnapScores(card: ICards[]) {
  if (card && card.length > 1) {
    if (card[0]?.value === card[1]?.value) {
      const value = true;
      return { value };
    }
    if (card[0]?.suit === card[1]?.suit) {
      const suit = true;
      return { suit };
    } else {
      return { value: false, suit: false };
    }
  } else {
    return false;
  }
}

export function getUpdatedCards(prevCards: ICards[], newCard: ICards[]) {
  if (!newCard) return [];

  const updated = [...prevCards, newCard];
  if (updated.length > 2) {
    updated.shift();
  }

  const snapResult = getSnapScores(updated as ICards[]);
  return { updated, snapResult };
}

export const placeHolder = [
  {
    image: "https://deckofcardsapi.com/static/img/back.png",
    value: "0",
    suit: "none",
  },
];
