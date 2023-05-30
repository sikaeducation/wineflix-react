// Wine.js
import React from "react";
import NewBadge from "./NewBadge";
import ProgressIndicator from "./ProgressIndicator";

const Wine = ({ imageUrl, isNew, label, isFinished, progress }) => {
  return (
    <li>
      <div className="wine">
        <img src={imageUrl} alt="Wine" />
        {isNew && <NewBadge />}
        {isFinished && <ProgressIndicator progress={progress} />}
      </div>
    </li>
  );
};

export default Wine;
