"use client";

interface CounterPageProps {
  totalCards: number;
}

export default function Counter({ totalCards }: CounterPageProps) {
  return (
    <div className="border-3 border-black inset-shadow-sm p-4 text-xl mt-6 mx-6 bg-stone-200 rounded-xs">
      <h1 className="">{totalCards}</h1>
    </div>
  );
}
