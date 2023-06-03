import { useEffect, useState } from "react";
import "./App.css";
import Header from "./layout/header/Header";
import WineList from "./wine/components/WineList";

const App = () => {

  const [drinkAgainData, setDrinkAgainData] = useState([]);
  const [keepDrinkingData, setKeepDrinkingData] = useState([]);

  useEffect(() => {
    const wines = [{
      id: 1,
      imageUrl: '/red-wine.jpg',
      isNew: true,
      label: 'Wine',
      isFinished: true,
    }, {
      id: 2,
      imageUrl: '/red-wine.jpg',
      label: 'Wine',
      isFinished: true,
    }, {
      id: 3,
      imageUrl: '/red-wine.jpg',
      label: 'Wine',
      isNew: true,
      isFinished: true,
    }, {
      id: 4,
      imageUrl: '/red-wine.jpg',
      label: 'Wine',
      isFinished: true,
    }, {
      id: 5,
      imageUrl: '/red-wine.jpg',
      label: 'Wine',
      isNew: true,
      isFinished: true,
    }, {
      id: 6,
      imageUrl: '/red-wine.jpg',
      label: 'Wine',
      isFinished: true,
    }, {
      id: 7,
      imageUrl: '/red-wine.jpg',
      label: 'Wine',
      isFinished: true,
    }, {
      id: 8,
      imageUrl: '/red-wine.jpg',
      label: 'Wine',
      isFinished: true,
    }, {
      id: 1,
      imageUrl: '/red-wine.jpg',
      progress: 22,
      label: 'Wine',
    }, {
      id: 2,
      imageUrl: '/red-wine.jpg',
      progress: 22,
      label: 'Wine',
    }, {
      id: 3,
      imageUrl: '/red-wine.jpg',
      progress: 22,
      label: 'Wine',
    }, {
      id: 4,
      imageUrl: '/red-wine.jpg',
      progress: 22,
      label: 'Wine',
    }, {
      id: 5,
      imageUrl: '/red-wine.jpg',
      progress: 22,
      label: 'Wine',
    }, {
      id: 6,
      imageUrl: '/red-wine.jpg',
      progress: 22,
      label: 'Wine',
    }, {
      id: 7,
      imageUrl: '/red-wine.jpg',
      progress: 22,
      label: 'Wine',
    }, {
      id: 8,
      imageUrl: '/red-wine.jpg',
      progress: 22,
      label: 'Wine',
    }];

    setDrinkAgainData(wines.filter(wine => wine.hasOwnProperty("isFinished")));
    setKeepDrinkingData(wines.filter(wine => wine.hasOwnProperty("progress")));
  }, []);
  
  return (
  <div className="App">
    <Header />
    <main>
      {drinkAgainData && <WineList wineList={drinkAgainData} title="Drink Again" />}
      {keepDrinkingData && <WineList wineList={keepDrinkingData} title="Keep Drinking" />}
    </main>
  </div>
  )
}

export default App;
