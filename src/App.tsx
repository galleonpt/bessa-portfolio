import { useState, useCallback } from "react";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import "./styles/global.css";

function App() {
  const [theme, setTheme] = useState<string>(""); // '' == light mode | 'dark' == dark mode

  const handleToggleTheme = useCallback(() => {
    setTheme((prevState) => (prevState === "dark" ? "" : "dark"));
  }, [theme]);

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className={`bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800`}>
        <section className="min-h-screen">
          <Header onToggleTheme={handleToggleTheme} />

          <Introduction />
        </section>

        <Services />

        <Portfolio />
      </div>
    </div>
  );
}

export default App;
