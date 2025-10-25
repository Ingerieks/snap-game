"use client";

interface SuccessMessagePageProps {
  snapSuccess: string;
}

export default function SuccessMessage({
  snapSuccess,
}: SuccessMessagePageProps) {
  return (
    <div className="border-3 border-black bg-stone-200 w-1/6 flex flex-col justify-center items-center">
      <div className="bg-blue-700 w-full text-white px-2 py-1 ">
        <h1>CONGRATULATIONS!</h1>
      </div>
      <div className="px-2 py-1">
        <h1>{snapSuccess}</h1>
      </div>
    </div>
  );
}
