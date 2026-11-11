import SmallDiv from './SmallDiv';
import animation_video from '/download-Picsart-BackgroundRemover.webm';
import bg_img from '/Ellipse 19.png';
import { motion } from 'motion/react';


const NotFound = () => {
    return (
        <main>
            <section className="section-p ">
                <div className="content-area m-auto flex align-bottom justify-center">
                    
                    
                    <div style={{ backgroundImage: `url("${bg_img}")` }} className='bg-no-repeat bg-center bg-contain md:h-100 relative'>
                        <motion.p initial={{y:70}} animate={{y:0}} transition={{duration:1}} >Oops.......</motion.p>
                        <motion.p initial={{y:70}} animate={{y:0}} transition={{duration:1.5}}>This page not Found</motion.p>
                        <video
                            className="pointer-events-none h-20 md:h-60 object-center"
                            src={animation_video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            aria-hidden="true"
                        />
                        <div className='flex'>
                            <motion.p transition={{repeat:3}} className='text-8xl md:text-[250px]  rotate-20'>4</motion.p>
                            <p className='text-5xl md:text-[250px]'>0</p>
                            <p className='text-7xl md:text-[250px]'>4</p>
                        </div>
                        <img src="/public/noto_potted-plant.png" className='h-max absolute bottom-0 right-25' alt="" />
                        
                    </div>
                    <SmallDiv/>

                     
                </div>
            </section>
        </main>
    );
};

export default NotFound;