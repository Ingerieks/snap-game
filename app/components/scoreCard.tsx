"use client";

import Button from "./button";

interface ScoreCardPageProps {
  snapValue: number;
  snapSuit: number;
}

export default function ScoreCard({ snapValue, snapSuit }: ScoreCardPageProps) {
  return (
    <div className="border border-gray-200 shadow-md rounded-md w-1/6 flex flex-col justify-center items-center">
      <div className="px-6 py-4 text-xl">
        <h1>SNAP suit score: {snapSuit}</h1>
        <h1>SNAP value score: {snapValue}</h1>
        <div className="my-4">
          <Button totalCards={0} handleClick={() => console.log("restart")} />
        </div>
      </div>
    </div>
  );
}
