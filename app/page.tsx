import { Fragment, memo } from "react";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skill from "./components/Skill";

const Home = memo(() => {
  
  return (
    <Fragment>
      <NavBar />
      <Aside/>
      <Dashboard />
      <About />
      <Skill />
      <Features />
      <Contact />
      <Footer />
    </Fragment>
  )
})

Home.displayName = "Home"

export default Home;
