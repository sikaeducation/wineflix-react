import "./App.css";
import Header from "./Header";
import Main from "./Main";
import winesData from "./winesData.json";

const App = () => {
  const heroContent = {
    title: "Rex Goliath",
    subtitle: "Silly subtitle",
    imageUrl: "/rex-goliath-logo.png",
    description: "Silly description."
  };

  const groupWinesByCategory = (wines) => {
    const groupedWines = {};

    wines.forEach((wine) => {
      if (wine.category) {
        if (!groupedWines[wine.category]) {
          groupedWines[wine.category] = [];
        }

        groupedWines[wine.category].push(wine);
      }
    });

    return groupedWines;
  };

  const groupedWines = groupWinesByCategory(winesData);

  return (
    <div className="App">
      <Header heroContent={heroContent} />
      <Main groupedWines={groupedWines} />
    </div>
  );
};

export default App;
