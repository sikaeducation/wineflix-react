import { useEffect, useState } from "react";
import "./App.css";
import HeaderComponent from "./layout/HeaderComponent";
import SectionComponent from "./layout/SectionComponent";

const App = () => {

  const [drinkAgainData, setDrinkAgainData] = useState([]);
  const [keepDrinkingData, setKeepDrinkingData] = useState([]);

  useEffect(() => {
    setDrinkAgainData([
      {
        imageUrl: "/red-wine.jpg",
        imageName: "Wine",
        isNew: false,
      },
      {
        imageUrl: "/red-wine.jpg",
        imageName: "Wine",
        isNew: true,
      },
      {
        imageUrl: "/red-wine.jpg",
        imageName: "Wine",
        isNew: false,
      },
      {
        imageUrl: "/red-wine.jpg",
        imageName: "Wine",
        isNew: true,
      },
      {
        imageUrl: "/red-wine.jpg",
        imageName: "Wine",
        isNew: false,
      },
    ]);

    setKeepDrinkingData([
      {
        amountConsumed: 22,
        imageUrl: "/red-wine.jpg",
        imageName: "Wine",
      },
      {
        imageUrl: "/red-wine.jpg",
        imageName: "Wine",
      },
      {
        amountConsumed: 77,
        imageUrl: "/red-wine.jpg",
        imageName: "Wine",
      },
      {
        imageUrl: "/red-wine.jpg",
        imageName: "Wine",
      },
      {
        imageUrl: "/red-wine.jpg",
        imageName: "Wine",
        isNew: false,
      },
    ])
  }, []);
  
  return (
  <div className="App">
    <HeaderComponent />
    <main>
      {drinkAgainData && <SectionComponent wineList={drinkAgainData} title="Drink Again" />}
      {keepDrinkingData && <SectionComponent wineList={keepDrinkingData} title="Keep Drinking" />}
    </main>
  </div>
  )
}

export default App
