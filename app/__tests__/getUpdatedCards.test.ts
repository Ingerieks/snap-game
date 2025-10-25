import { handleNewCard } from "../../lib/gameLogic";

interface ICards {
  id: string;
  value: string;
  suit: string;
  image: string;
}

describe("handleNewCard", () => {
  const card1: ICards = { id: "1", value: "A", suit: "hearts", image: "" };
  const card2: ICards = { id: "2", value: "K", suit: "spades", image: "" };
  const card3: ICards = { id: "3", value: "Q", suit: "diamonds", image: "" };

  it("should add the new card to the previous cards", () => {
    const result = handleNewCard([card1], card2);
    expect(result).toEqual([card1, card2]);
  });

  it("should remove the oldest card if more than 2 cards exist", () => {
    const result = handleNewCard([card1, card2], card3);
    expect(result).toEqual([card2, card3]);
  });

  it("should return only the new card if previous cards are empty", () => {
    const result = handleNewCard([], card1);
    expect(result).toEqual([card1]);
  });

  it("should not mutate the original previous cards array", () => {
    const prev = [card1];
    const result = handleNewCard(prev, card2);
    expect(result).not.toBe(prev);
    expect(prev).toEqual([card1]);
  });
});
