"use client";

import { playCardDrawSound } from "../../lib/gameLogic";

interface ButtonPageProps {
  isLoading: boolean;
  handleClick: () => void;
}

export default function Buttons({ isLoading, handleClick }: ButtonPageProps) {
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <button className="border border-black p-1" onClick={handleClick}>
            loading
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            className="border border-black p-1"
            onClick={() => {
              playCardDrawSound();
              handleClick();
            }}
          >
            draw card
          </button>
        </div>
      )}
    </>
  );
}
