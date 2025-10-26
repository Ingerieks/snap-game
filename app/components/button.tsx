"use client";

import { playCardDrawSound } from "../../lib/gameLogic";

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
        {totalCards >= 1 ? (
          <>
            <button
              disabled={isLoading}
              className="text-xl text-white bg-linear-to-r from-cyan-500 to-blue-500 shadow-sm py-2 px-4 rounded-sm p-1"
              onClick={() => {
                playCardDrawSound();
                handleClick();
              }}
            >
              Draw card
            </button>
          </>
        ) : (
          <>
            <button
              disabled={isLoading}
              className="text-xl text-white bg-linear-to-r from-cyan-500 to-blue-500 shadow-sm py-2 px-4 rounded-sm p-1"
              onClick={() => {
                handleClick();
              }}
            >
              Play again
            </button>
          </>
        )}
      </div>
    </>
  );
}
