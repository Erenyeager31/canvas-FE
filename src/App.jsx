import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "../components/NavBar.jsx";
// import Demo from "../components/Demo.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <Demo/> */}

      <NavBar/>
    </>
  );
}

export default App;
