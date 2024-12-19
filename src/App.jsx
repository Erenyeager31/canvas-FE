import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "../components/NavBar.jsx";
import Home from "../components/Home.jsx";
import Demo from "../components/Demo.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <Demo/> */}
  <Home></Home>
    </>
  );
}

export default App;
