import { ESnapType, ICards } from "@/app/types";

export function checkSnap(card: ICards[]) {
  if (card && card.length > 1) {
    if (card[0]?.value === card[1]?.value) {
      const value = true;
      return ESnapType.VALUE;
    }
    if (card[0]?.suit === card[1]?.suit) {
      const suit = true;
      return ESnapType.SUIT;
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
    image: "",
    value: "0",
    suit: "none",
  },
];

export function playCardDrawSound() {
  const audio = new Audio("/cardSound.wav");
  audio.volume = 0.5;
  audio.play().catch((err) => console.warn("Audio play blocked:", err));
}
