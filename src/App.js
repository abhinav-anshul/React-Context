import { createContext, useState } from "react";
import ClassBased from "./ClassBased";
import FunctionBased from "./FunctionBased";

export const ThemeContext = createContext("darkTheme");

export default function App() {
  const [darktheme, setDarkTheme] = useState(true);

  function handleToggle() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={darktheme}>
      <button onClick={handleToggle}>Toggle Theme</button>
      <ClassBased />
      <FunctionBased />
    </ThemeContext.Provider>
  );
}
