// ProgressIndicator.js
import React from "react";

const ProgressIndicator = ({ progress }) => {
  return (
    <div className="amount-consumed">
      <progress min="0" max="100" value={progress}></progress>
    </div>
  );
};

export default ProgressIndicator;
