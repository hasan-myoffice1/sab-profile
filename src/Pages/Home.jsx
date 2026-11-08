import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <>
          <Hero/>
          <About/>
          <Services/>
          <Projects/>
          <Skills/>
          <Process/>
          <FAQ/>
          <CTA/> 
          <p className="text-center my-10 text-gray-300">Next section Coming Soon.....</p>
        </>
    );
};

export default Home;