import { useState, useCallback } from "react";
import { Header } from "./components/Header";
import { Router } from "./routes";
import "./styles/global.css";

function App() {
  const [theme, setTheme] = useState<string>(""); // '' == light mode | 'dark' == dark mode

  const handleToggleTheme = useCallback(() => {
    setTheme((prevState) => (prevState === "dark" ? "" : "dark"));
  }, [theme]);

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className={`bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800`}>
        <Header onToggleTheme={handleToggleTheme} />

        <Router />
      </div>
    </div>
  );
}

export default App;
