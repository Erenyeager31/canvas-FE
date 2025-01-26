import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Login from "../components/Login.jsx";
import SignUp from "../components/SignUp.jsx";
import ContactUs from "../components/ContactUs.jsx";
// import Demo from "../components/Demo.jsx";
import Generator_Step_1 from "../components/Generator_Step_1.jsx";
import Generator_Step_2 from "../components/Generator_Step_2.jsx";
import Generator_Step_3 from "../components/Generator_Step_3.jsx";
import Generator_Step_4 from "../components/Generator_Step_4.jsx";
import Footer from "../components/Footer.jsx";
import Home from "../components/Home.jsx";
import User_details from "../components/User_details.jsx";
import Community from "../components/Community.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <Demo/> */}
    {/* <NavBar></NavBar> */}
      {/* <AboutUs></AboutUs> */}
      {/* <Login></Login> */}
      {/* <SignUp></SignUp> */}
      {/* <ContactUs></ContactUs> */}
      {/* <Generator_Step_1></Generator_Step_1> */}
      {/* <Generator_Step_2></Generator_Step_2> */}
      {/* <Generator_Step_3></Generator_Step_3> */}
      {/* <Footer></Footer> */}

      <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/generator-step-1" element={<Generator_Step_1 />} />
        <Route path="/generator-step-2" element={<Generator_Step_2 />} />
        <Route path="/generator-step-3" element={<Generator_Step_3 />} />
        <Route path="/generator-step-4" element={<Generator_Step_4 />} />
        <Route path="/user_details" element={<User_details />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
