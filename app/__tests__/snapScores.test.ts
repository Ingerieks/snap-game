import { getUpdatedCards, getSnapScores } from "../utils/gameHelpers";

describe("getSnapScores", () => {
  it("returns true for matching values", () => {
    const cards = [
      { value: "K", suit: "hearts" },
      { value: "K", suit: "spades" },
    ];
    expect(getSnapScores(cards)).toEqual({ value: true });
  });

  it("returns true for matching suits", () => {
    const cards = [
      { value: "2", suit: "clubs" },
      { value: "7", suit: "clubs" },
    ];
    expect(getSnapScores(cards)).toEqual({ suit: true });
  });

  it("returns false when cards don't match", () => {
    const cards = [
      { value: "2", suit: "hearts" },
      { value: "3", suit: "clubs" },
    ];
    expect(getSnapScores(cards)).toEqual(false);
  });

  it("handles less than two cards", () => {
    const cards = [{ value: "2", suit: "hearts" }];
    expect(getSnapScores(cards)).toEqual(false);
  });
});
