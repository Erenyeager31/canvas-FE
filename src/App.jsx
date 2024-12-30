import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "../components/NavBar.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Login from "../components/Login.jsx";
import SignUp from "../components/SignUp.jsx";
import ContactUs from "../components/ContactUs.jsx";
import Demo from "../components/Demo.jsx";
import Generator_Step_1 from "../components/Generator_Step_1.jsx";
import Generator_Step_2 from "../components/Generator_Step_2.jsx";
import Generator_Step_3 from "../components/Generator_Step_3.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <Demo/> */}
    <NavBar></NavBar>
      <AboutUs></AboutUs>
      <Login></Login>
      <SignUp></SignUp>
      <ContactUs></ContactUs>
      <Generator_Step_1></Generator_Step_1>
      <Generator_Step_2></Generator_Step_2>
      <Generator_Step_3></Generator_Step_3>
    </>
  );
}

export default App;
