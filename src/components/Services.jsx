import SectionHeader from "./SectionHeader";
import wordpressIcon from "/src/assets/bxl_wordpress.svg";
import seoSearchGraphIcon from "/src/assets/streamline-ultimate_seo-search-graph.svg";
import outlineDesignServicesIcon from "/src/assets/ic_outline-design-services.svg";
import webpageIcon  from "/src/assets/icon-park-outline_web-page.svg";
import { motion } from 'motion/react';


const Services = () => {

    const data = {
        'title':"My web development services",
        'desc': "I build responsive, scalable, and high-performance websites using modern technologies and best coding practices."
    }
    const cardHover = {
        'div' : 'group-hover:-translate-3 transition-all duration-300',
        'h3' : 'text-xl font-semibold mb-3 group-hover:text-3xl transition-all duration-300 group-hover:text-primary-100'
    }


    return (
        <section id="services" className="section-p">
            <div className="content-area">
                <div className="max-w-2xl">
                     <SectionHeader dataSend={data}/>
                </div>
                <div className="relative mt-10 sm:mt-15">
                    <div className="grid grid-cols-1 gap-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">

                        <motion.div 
                         initial={{x:-1000, opacity:0 }} whileInView={{x:0, opacity:1}} transition={{duration:0.5}}  viewport={{once:true}}
                        className="lg:col-span-2">
                            <div className="flex flex-col gap-6 rounded-3xl border-l border-t border-gray-100 p-6 shadow-xl sm:p-8 lg:flex-row lg:items-center lg:gap-10 lg:p-12 group">

                                <div className={`"flex-1" ${cardHover.div}`}>
                                    <h3 className={cardHover.h3}
                                     >Web Development</h3>
                                    <p>I build responsive, scalable, and high-performance websites using modern technologies and best coding practices.</p>
                                </div>
                                <div className="size-20 max-w-full mt-10 shrink-0 flex justify-center align-middle">
                                    <img src={webpageIcon} alt="web page Icon" className=""/>
                                </div>
                            </div>

                        </motion.div>

                        <motion.div 
                        initial={{y:100, opacity:0 }} whileInView={{y:0, opacity:1}} transition={{duration:0.4}}   viewport={{once:true}}
                        >
                            <div className="flex h-full flex-col rounded-3xl border-l border-t border-gray-100 p-6 shadow-xl sm:p-8 lg:p-12 group">

                                <div className={cardHover.div}>
                                    <h3 className={`text-xl font-semibold mb-3 ${cardHover.h3}`}>UI/UX Designer</h3>
                                    <p>User-centered interfaces that improve engagement, usability, and overall customer experience.</p>
                                </div>
                                <div className="size-20 max-w-full mt-12 shrink-0 flex justify-center align-middle">
                                    <img src={outlineDesignServicesIcon} alt="Outline Design Services Icon" className=""/>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{y:-100, opacity:0 }} whileInView={{y:0, opacity:1}} transition={{duration:0.5}} viewport={{once:true}}>
                            <div className="flex flex-col rounded-3xl border-l border-t border-gray-100 p-6 shadow-xl sm:p-8 lg:-translate-y-30 lg:p-12 group">

                                <div className={cardHover.div}>
                                    <h3 className={cardHover.h3}>WordPress</h3>
                                    <p>Custom WordPress websites, theme customization, plugin setup, and performance optimization.</p>
                                </div>
                                <div className="size-20 max-w-full mt-12 shrink-0 flex justify-center align-middle">
                                    <img src={wordpressIcon} alt="WordPress icon" className=""/>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div  initial={{x:1000, opacity:0 }} whileInView={{x:0, opacity:1}} transition={{duration:0.5}}  viewport={{once:true}}
                         className="lg:col-span-2">
                            <div className="flex flex-col gap-6 rounded-3xl border-l border-t border-gray-100 p-6 shadow-xl sm:p-8  lg:flex-row lg:items-center lg:gap-10 lg:p-12 group">

                                <div className={`text-xl font-semibold mb-3 ${cardHover.div}`}>
                                    <h3 className={cardHover.h3}>SEO</h3>
                                    <p>Professional Shopify store setup, theme editing, and conversion-focused design improvements.</p>
                                </div>
                                <div className="size-20 mt-10 max-w-full shrink-0 flex justify-center align-middle">
                                    <img src={seoSearchGraphIcon} alt="Seo Search Graph Icon"/>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} className="pointer-events-none absolute top-50 right-50 hidden -translate-x-60 translate-y-30 text-6xl font-primary font-bold text-gray-400 xl:block">services</motion.p>
                </div>
            </div>
        </section>
    );
};

export default Services;