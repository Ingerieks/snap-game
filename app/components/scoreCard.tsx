"use client";

interface ScoreCardPageProps {
  snapValue: number;
  snapSuit: number;
}

export default function ScoreCard({ snapValue, snapSuit }: ScoreCardPageProps) {
  return (
    <div className="border-3 border-black bg-stone-200 w-1/6 flex flex-col justify-center items-center">
      <div className="bg-blue-700 w-full text-white px-2 py-1 flex flex-col justify-center items-center">
        <h1>YOU DID IT!</h1>
      </div>
      <div className="px-2 py-1">
        <h1>SNAP suit score: {snapSuit}</h1>
        <h1>SNAP value score: {snapValue}</h1>
      </div>
    </div>
  );
}
