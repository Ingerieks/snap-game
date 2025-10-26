"use client";

interface CounterPageProps {
  totalCards: number;
}

export default function Counter({ totalCards }: CounterPageProps) {
  return (
    <div className="rounded border border-gray-200 text-gray-700 shadow-md p-2 text-xl">
      <h1 className="">{totalCards} cards remaining</h1>
    </div>
  );
}
