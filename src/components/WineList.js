// WineList.js
import Wine from "./Wine";
import ProgressIndicator from "./ProgressIndicator";
const WineList = ({ wines }) => {
  return (
    <ul>
      {wines.map((wine) => (
        <Wine
          key={wine.id}
          imageUrl={wine.imageUrl}
          isNew={wine.isNew}
          isFinished={wine.isFinished}
          progress={wine.progress}
        >
          {wine.isFinished && <ProgressIndicator progress={wine.progress} />}
        </Wine>
      ))}
    </ul>
  );
};

export default WineList;
