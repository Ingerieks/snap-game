import { ICards } from "../app/types/cards";

export function checkSnap(card: ICards[]) {
  if (card && card.length > 1) {
    if (card[0]?.value === card[1]?.value) {
      const value = true;
      return { value };
    }
    if (card[0]?.suit === card[1]?.suit) {
      const suit = true;
      return { suit };
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export function handleNewCard(prevCards: ICards[], newCard: ICards) {
  const updated = [...prevCards, newCard];
  if (updated.length > 2) {
    updated.shift();
  }

  return updated;
}

export const placeHolder = [
  {
    image: "https://deckofcardsapi.com/static/img/back.png",
    value: "0",
    suit: "none",
  },
];

export function playCardDrawSound() {
  const audio = new Audio("/cardSound.wav");
  audio.volume = 0.5;
  audio.play().catch((err) => console.warn("Audio play blocked:", err));
}
