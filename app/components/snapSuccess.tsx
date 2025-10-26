"use client";

import { ESnapType } from "../types";
import SuccessMessage from "./successMessage";

interface SnapSuccessPageProps {
  snapResult: ESnapType;
}

export default function SnapSuccess({ snapResult }: SnapSuccessPageProps) {
  return (
    <div className="my-6">
      {snapResult === ESnapType.VALUE ? (
        <div className="flex justify-center">
          <SuccessMessage snapSuccess={"SNAP VALUE!"} />
        </div>
      ) : snapResult === ESnapType.SUIT ? (
        <div className="flex justify-center">
          <SuccessMessage snapSuccess={"SNAP SUIT!"} />
        </div>
      ) : null}
    </div>
  );
}
