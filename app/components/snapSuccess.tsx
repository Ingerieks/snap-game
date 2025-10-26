"use client";

import { ICards } from "../types/cards";
import SuccessMessage from "./successMessage";

interface SnapSuccessPageProps {
  snapResult: {
    value?: boolean;
    suit?: boolean;
  };
}

export default function SnapSuccess({ snapResult }: SnapSuccessPageProps) {
  return (
    <div className="my-6">
      {snapResult.value ? (
        <div className="flex justify-center">
          <SuccessMessage snapSuccess={"SNAP VALUE!"} />
        </div>
      ) : snapResult.suit ? (
        <div className="flex justify-center">
          <SuccessMessage snapSuccess={"SNAP SUIT!"} />
        </div>
      ) : null}
    </div>
  );
}
