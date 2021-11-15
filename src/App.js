import "./App.css";
import { siteTitle, heroHeaderContent, heroContent, navbarLinks, categories, headerControls } from "./data";
import Category from "./components/Category";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="App">
      <Hero imageUrl={heroHeaderContent.imageUrl}
        imageLabel={heroHeaderContent.imageLabel}
        siteTitle={siteTitle}
        navbarLinks={navbarLinks}
        heroContent={heroContent}
        headerControls={headerControls} />
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
