// App.js
import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import winesData from "./winesData.json";
import Footer from "./Footer";

const App = () => {
  const heroContent = {
    title: "Rex Goliath",
    subtitle: "Silly subtitle",
    imageUrl: "/rex-goliath-logo.png",
    description: "Silly description."
  };

  return (
    <div className="App">
      <Header heroContent={heroContent} />
      <Main winesData={winesData} />
      <Footer />
    </div>
  );
};

export default App;
