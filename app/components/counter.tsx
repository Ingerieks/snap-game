"use client";

interface CounterPageProps {
  totalCards: number;
}

export default function Counter({ totalCards }: CounterPageProps) {
  return (
    <div className="border border-black p-4 text-xl mt-6 mx-6">
      <h1 className="">{totalCards}</h1>
    </div>
  );
}
