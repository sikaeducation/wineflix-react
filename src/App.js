// App.js
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
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
