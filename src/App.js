import "./App.css";
import { heroContent, navbarLinks, categories } from "./data";
import Category from "./components/Category";
import Hero from "./components/Hero";

// TODO: No hardcoded data

const App = () => {
  return (
    <div className="App">
      <Hero imageUrl="/wine-hero.webp"
        imageLabel="Wine bottles"
        navbarLinks={navbarLinks}
        heroContent={heroContent} />
      <main>
        {categories.map((category) => (
          <Category title={category.title}
            data={category.data} />
        ))}
      </main>
    </div>
  )
}

export default App
