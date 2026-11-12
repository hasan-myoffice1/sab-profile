import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import heroimg from '/aboutpage.png';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Process from '../components/Process';
import CTA from '../components/CTA';
import SmallDiv from '../components/SmallDiv';
import { motion, stagger, useAnimate } from 'motion/react';

const AboutPage = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            '.item',
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.4, delay: stagger(0.1) }
        );
    }, [animate]);

    return (
        <main>
            <section ref={scope} className="section-p">
                <div className="content-area">
                     <motion.h1 
                      initial={{y:100, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1,delay:0.2}}
                     className="title-1 text-center md:w-150 m-auto">Grow Your Business with Web Development by Saimun Al Bashar.</motion.h1>

                     <motion.p 
                     initial={{y:100, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1.3,delay:0.2}}
                     className="text-center mt-4 m-auto md:w-150">I build responsive, scalable, and high-performance websites using modern technologies and best coding practices.</motion.p>

                     <div className="md:w-200 m-auto relative">    
                        <motion.img initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration:2}} src={heroimg} alt="" />
                     </div>
                     <div className='flex justify-center gap-5 flex-wrap relative'>
                        <motion.div
                        initial={{y:100, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1.5}}
                        className='border border-primary-100 shadow  text-center py-2 px-7 rounded-full font-semibold tracking-[.3em] hover:scale-115 duration-200 item'><Link to="/me">About Me</Link></motion.div>

                        <motion.div 
                        initial={{y:100, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1.2,delay:0.2}}
                        className='border border-gray-100 shadow bg-primary-100 text-center py-2 px-7 rounded-full font-semibold tracking-[.3em] hover:scale-115 duration-200 item'><Link to="/services">See of All Services</Link>
                        </motion.div>

                    
                        {['Web Development', 'Web Design', 'Web SEO', 'Wordpress'].map((service, index) => (
                            <motion.h2
                                key={service}
                                initial={{ x: 0, opacity: 0 }}
                                animate={{ x: [0, 220], opacity: [0, 1, 0] }}
                                transition={{
                                    duration: 2,
                                    delay: 2 + index,
                                    repeat: Infinity,
                                    repeatDelay: 3,
                                }}
                                className="text-center text-xl mt-4 absolute -top-2 right-90 -z-1"
                            >
                                {service}
                            </motion.h2>
                        ))}
                    
                     </div>
                </div>
           </section>
           <Services/>
           <Projects/>
           <Process/>
           <CTA/>
           <SmallDiv/>
        </main>
    );
};

export default AboutPage;