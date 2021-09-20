import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [theme, setTheme] = useState("default");

  const toggleDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFF";
    }
  };

  const selectHandler = (e) => {
    if (e.target.value === "primary") {
      setTheme(e.target.value);
      document.body.style.backgroundColor = "#0d6efd";
    } else if (e.target.value === "danger") {
      setTheme(e.target.value);
      document.body.style.backgroundColor = "#dc3545";
    } else if (e.target.value === "success") {
      setTheme(e.target.value);
      document.body.style.backgroundColor = "#20c997";
    } else if (e.target.value === "warning") {
      setTheme(e.target.value);
      document.body.style.backgroundColor = "#ffc107";
    } else {
      setTheme(e.target.value);
      document.body.style.backgroundColor = "#f8f9fa";
    }
  };
  return (
    <div>
      <Navbar
        mode={mode}
        theme={theme}
        toggleDarkMode={toggleDarkMode}
        selectHandler={selectHandler}
      />
      <TextForm mode={mode} />
    </div>
  );
}

export default App;
