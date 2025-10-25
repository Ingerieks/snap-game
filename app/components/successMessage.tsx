"use client";

interface SuccessMessagePageProps {
  snapSuccess: string;
}

export default function SuccessMessage({
  snapSuccess,
}: SuccessMessagePageProps) {
  return (
    <div className="border border-black w-1/6 flex flex-col justify-center items-center">
      <div className="">
        <h1>CONGRATULATIONS!</h1>
      </div>
      <div className="px-2 py-1">
        <h1>{snapSuccess}</h1>
      </div>
    </div>
  );
}
