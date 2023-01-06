import { useState } from "react";
import "./styles/global.css";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={`bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800`}>
        <section className="min-h-screen">
          <Header />

          <Introduction />
        </section>

        <Services />

        <Portfolio />
      </div>
    </div>
  );
}

export default App;
