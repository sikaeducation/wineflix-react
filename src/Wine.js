// Wine.js
import React from "react";

const Wine = ({ imageUrl, isNew, label, isFinished, progress }) => {
  return (
    <li>
      <div className="wine">
        <img src={imageUrl} alt="Wine" />
        {isNew && <span className="new-badge">New!</span>}
        {isFinished && (
          <div className="amount-consumed">
            <progress min="0" max="100" value={progress}></progress>
          </div>
        )}
      </div>
    </li>
  );
};

export default Wine;
