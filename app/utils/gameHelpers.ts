export function getSnapScores(card) {
  if (card && card.length > 1) {
    if (card[0]?.value === card[1]?.value) {
      const value = true;
      return { value };
    }
    if (card[0]?.suit === card[1]?.suit) {
      const suit = true;
      return { suit };
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export function getUpdatedCards(prevCards, newCard) {
  if (!newCard) return [];

  const updated = [...prevCards, newCard];
  if (updated.length > 2) {
    updated.shift();
  }

  const snapResult = getSnapScores(updated);
  return { updated, snapResult };
}
