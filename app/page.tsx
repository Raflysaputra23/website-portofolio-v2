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
  const Links = [
    <a key={1} href="#" className="text-sm h-10 w-10 flex items-center justify-center rounded-md shadow transition backdrop-blur-sm bg-white/5 lg:backdrop-blur-none lg:bg-transparent shadow-blue-950 hover:bg-blue-900"><i className="bx bx-home text-xl"></i></a>,
    <a key={2} href="#about" className="text-sm h-10 w-10 flex items-center justify-center rounded-md shadow transition backdrop-blur-sm bg-white/5 lg:backdrop-blur-none lg:bg-transparent shadow-blue-950 hover:bg-blue-900"><i className="bx bx-user-voice text-xl"></i></a>,
    <a key={3} href="#features" className="text-sm h-10 w-10 flex items-center justify-center rounded-md shadow transition backdrop-blur-sm bg-white/5 lg:backdrop-blur-none lg:bg-transparent shadow-blue-950 hover:bg-blue-900"><i className="bx bx-hive text-xl"></i></a>,
    <a key={4} href="#contact" className="text-sm h-10 w-10 flex items-center justify-center rounded-md shadow transition backdrop-blur-sm bg-white/5 lg:backdrop-blur-none lg:bg-transparent shadow-blue-950 hover:bg-blue-900"><i className="bx bx-phone-call text-xl"></i></a>,
  ]
  return (
    <Fragment>
      <NavBar Links={Links} />
      <Aside Links={Links}/>
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
