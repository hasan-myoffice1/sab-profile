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
import WebDevelopment from "./Pages/WebDevelopment";

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
           <Route path="/services/web-development" element={<WebDevelopment/>}/>
        </Routes>
      {/* <Lab/> */}

      <Footer/>
      <a href="/" className="size-10 border-2 border-primary-40 rounded-full shadow-xl fixed bottom-10 right-10  flex justify-center align-middle text-2xl animate-bounce">↑</a> 
      <div className="hidden xl:block fixed bottom-10 left-10 justify-center text-2xl hover:opacity-0 duration-800" title="It Service Company">
         <p className="text-gray-400"><span>[!]</span><span>White</span><span>pixel</span></p>
         <p className="text-[15px] text-gray-300">Saimun Al bashar</p>
      </div>
    </>
  )
}

export default App
