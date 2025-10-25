"use client";

import { ICards } from "../types/cards";
import SuccessMessage from "./successMessage";

interface SnapSuccessPageProps {
  cards: ICards[];
}

export default function SnapSuccess({ cards }: SnapSuccessPageProps) {
  return (
    <div className="my-6">
      {cards.length > 1 && (
        <>
          {cards[0].value === cards[1].value ? (
            <div className="flex justify-center">
              <SuccessMessage snapSuccess={"SNAP value!"} />
            </div>
          ) : cards[0].suit === cards[1].suit ? (
            <div className="flex justify-center">
              <SuccessMessage snapSuccess={"SNAP suit!"} />
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
