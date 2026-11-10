import { Link } from 'react-router-dom';
import heroimg from '/aboutpage.png';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Process from '../components/Process';
import CTA from '../components/CTA';

const AboutPage = () => {
    return (
        <main>
            <section className="section-p">
                <div className="content-area">
                     <h1 className="title-1 text-center md:w-150 m-auto">Grow Your Business with Web Development by Saimun Al Bashar.</h1>
                     <p className="text-center mt-4 m-auto md:w-150">I build responsive, scalable, and high-performance websites using modern technologies and best coding practices.</p>
                     <div className="md:w-200 m-auto">
                        <img src={heroimg} alt="" />
                     </div>
                     <div className='flex justify-center gap-5 flex-wrap'>
                        <div className='border border-primary-100 shadow  text-center py-2 px-7 rounded-full font-semibold tracking-[.3em] hover:scale-115 duration-200'><Link to="/me">About Me</Link></div>
                        <div className='border border-gray-100 shadow bg-primary-100 text-center py-2 px-7 rounded-full font-semibold tracking-[.3em] hover:scale-115 duration-200'><Link to="/services">See of All Services</Link></div>
                     </div>
                </div>
           </section>
           <Services/>
           <Projects/>
           <Process/>
           <CTA/>
        </main>
    );
};

export default AboutPage;