import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {


  return (
    <>
      <Header />
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <p className="text-center my-10 text-gray-300">Next section Coming Soon.....</p>
      <Footer/>
    </>
  )
}

export default App
