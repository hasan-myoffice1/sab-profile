import About from "./components/About";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import CTA from "./components/CTA";
import Process from "./components/Process";
import Hero from "./components/Hero";
// import { motion } from "motion/react"

function App() {


  return (
    <>
      <Header />
      {/* <Lab/> */}
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Skills/>
      <Process/>
      <FAQ/>
      <CTA/>
      <p className="text-center my-10 text-gray-300">Next section Coming Soon.....</p>
      <Footer/>
      <a href="/" className="size-10 border-2 border-primary-40 rounded-full shadow-xl fixed bottom-10 right-10  flex justify-center align-middle text-2xl animate-bounce">↑</a> 
    </>
  )
}

export default App
