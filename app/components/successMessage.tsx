"use client";

interface SuccessMessagePageProps {
  snapSuccess: string;
}

export default function SuccessMessage({
  snapSuccess,
}: SuccessMessagePageProps) {
  return (
    <div className="text-2xl text-gray-700">
      <div>
        <h1>{snapSuccess}</h1>
      </div>
    </div>
  );
}
