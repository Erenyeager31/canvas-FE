import React from "react";
import NavBar from "../components/NavBar.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Login from "../components/Login.jsx";
import SignUp from "../components/SignUp.jsx";
import ContactUs from "../components/ContactUs.jsx";
import Demo from "../components/Demo.jsx";
import Generator_Step_1 from "../components/Generator_Step_1.jsx";
import Generator_Step_2 from "../components/Generator_Step_2.jsx";
const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      {/* <AboutUs></AboutUs> */}
      {/* <Login></Login> */}
      {/* <SignUp></SignUp> */}
      {/* <ContactUs></ContactUs> */}
      {/* <Generator_Step_1></Generator_Step_1> */}
      <Generator_Step_2></Generator_Step_2>
      
    </>
  );
};

export default Home;
