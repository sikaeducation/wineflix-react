// WineList.js
// WineList.js
import React from "react";
import Wine from "./Wine";

const WineList = ({ wines }) => {
  return (
    <ul>
      {wines.map((wine) => (
        <Wine key={wine.id} imageUrl={wine.imageUrl} />
      ))}
    </ul>
  );
};

export default WineList;


// import React from "react";
// import Wine from "./Wine";

// const WineList = ({ wines }) => {
//   return (
//     <ul>
//       {wines.map((wine) => (
//         <Wine key={wine.id} wine={wine} />
//       ))}
//     </ul>
//   );
// };

// export default WineList;
