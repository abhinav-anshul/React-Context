import { useContext } from "react";
import { ThemeContext } from "./App";

function FunctionBased() {
  const theme = useContext(ThemeContext);
  console.log(theme);

  const themeStyle = {
    backgroundColor: theme ? "#333" : "#ccc",
    color: theme ? "#ccc" : "333"
  };

  return (
    <>
      <p style={themeStyle}>hi</p>
    </>
  );
}

export default FunctionBased;
