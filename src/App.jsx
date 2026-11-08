import Header from "./components/Header";
import Footer from "./components/Footer";
// import Lab from "./components/Lab";
// import { motion } from "motion/react"
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import MyServices from "./Pages/MyServices";

function App() {

  return (
    <>
      <Header />
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/services" element={<MyServices/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/blog" element={<Blog/>}/>
        </Routes>
      {/* <Lab/> */}
  
      <Footer/>
      <a href="/" className="size-10 border-2 border-primary-40 rounded-full shadow-xl fixed bottom-10 right-10  flex justify-center align-middle text-2xl animate-bounce">↑</a> 
    </>
  )
}

export default App
