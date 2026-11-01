import About from "./components/About";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import CTA from "./components/CTA";

function App() {


  return (
    <>
      <Header />
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <FAQ/>
      <CTA/>
      <p className="text-center my-10 text-gray-300">Next section Coming Soon.....</p>
      <Footer/>
    </>
  )
}

export default App
