"use client";

import { playCardDrawSound } from "../../lib/gameLogic";
import { ICards } from "../types/cards";

interface ButtonPageProps {
  isLoading?: boolean;
  handleClick: () => void;
  totalCards: number;
}

export default function Button({
  isLoading,
  handleClick,
  totalCards,
}: ButtonPageProps) {
  return (
    <>
      <div className="flex justify-center">
        <button
          disabled={isLoading}
          className="text-xl text-white bg-linear-to-r from-cyan-500 to-blue-500 shadow-sm py-2 px-4 rounded-sm p-1"
          onClick={() => {
            playCardDrawSound();
            handleClick();
          }}
        >
          {totalCards === 0 ? "Play again" : "Draw card"}
        </button>
      </div>
    </>
  );
}
