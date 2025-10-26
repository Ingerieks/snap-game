import { useState, CSSProperties } from "react";
import { BeatLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export function LoadingSpinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ecedf0ff");

  return (
    <div className="sweet-loading">
      <BeatLoader
        color={color}
        loading={loading}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
