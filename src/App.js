// App.js
import "./App.css";
import Header from "./navigation/Header";
import Main from "./components/Main";
import Footer from "./navigation/Footer";
import winesData from "./data/winesData.json";
import wineInfo from "./data/wineInfo.json"

const App = () => {
  const heroContent = wineInfo;

  return (
    <div className="App">
      <Header heroContent={heroContent} />
      <Main winesData={winesData} />
      <Footer />
    </div>
  );
};

export default App;
