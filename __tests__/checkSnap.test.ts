import { checkSnap } from "../lib/gameLogic";

describe("getSnapScores", () => {
  it("returns true for matching values", () => {
    const cards = [
      { value: "K", suit: "hearts", image: "" },
      { value: "K", suit: "spades", image: "" },
    ];
    expect(checkSnap(cards)).toEqual("value");
  });

  it("returns true for matching suits", () => {
    const cards = [
      { value: "2", suit: "clubs", image: "" },
      { value: "7", suit: "clubs", image: "" },
    ];
    expect(checkSnap(cards)).toEqual("suit");
  });

  it("returns null when cards don't match", () => {
    const cards = [
      { value: "2", suit: "hearts", image: "" },
      { value: "3", suit: "clubs", image: "" },
    ];
    expect(checkSnap(cards)).toEqual(null);
  });

  it("handles less than two cards", () => {
    const cards = [{ value: "2", suit: "hearts", image: "" }];
    expect(checkSnap(cards)).toEqual(null);
  });
});
