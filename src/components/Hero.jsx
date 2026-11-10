import { motion } from 'motion/react';
import ProfileImg from '/profile.jfif'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="home" className="md:h-200 flex items-center">
            <div className="content-area pt-10 hidden md:block">
                 <figure className='relative m-auto border-2 border-primary-40 h-90 w-70 rounded-2xl hover:scale-110 transition-all'>
                     <div className='overflow-hidden rounded-2xl h-full'>
                        <motion.img initial={{scale:0}} animate={{scale:1}} transition={{duration:1.5}} src={ProfileImg} alt="profile picture " className='cover' />
                     </div>
                     
                     <div className='absolute -top-7 -right-45 bg-white px-2'>
                        <motion.div initial={{x:-300}} animate={{x:0}} transition={{duration:1}} className='text-gray-500'>hello, i am</motion.div>
                        <motion.h2 initial={{x:-300}} animate={{x:0}} transition={{duration:0.6}} className='text-4xl font-bold uppercase'>Saimun Al <br/> <span className='text-primary-100'>Bashar</span></motion.h2>
                     </div>
                     <div className='absolute bottom-0 -left-70 text-end bg-white'>
                        <motion.div initial={{x:300}} animate={{x:0}} transition={{duration:1}} className='text-gray-500'>A Frontend</motion.div>
                        <motion.h2 initial={{x:300}} animate={{x:0}} transition={{duration:0.6}} className='text-4xl font-bold'>Web Developer &<br/> <span className='text-primary-100'> a Ui/Ux Designer</span></motion.h2>
                     </div>
                 </figure>
                 <motion.fieldset initial={{scale:0}} animate={{scale:1}} transition={{duration:1}} className='mx-auto mt-10 w-full max-w-[32rem] text-center text-gray-400 transition-all hover:scale-110'>Frontend Developer & Web Designer | React, Tailwind, WordPress, Figma | Building fast, responsive, and visually stunning web experiences</motion.fieldset>

                 <div className='border border-gray-100 shadow bg-primary-100 text-center py-2 px-7 rounded-full font-semibold  w-max m-auto mt-10 tracking-[.3em] hover:scale-115 duration-200'><Link to="/services">See of All Services</Link></div>
            
                <a href='#about' className='relative m-auto mt-20 flex h-10 w-7 items-center justify-center rounded-2xl border-2 border-primary-40 bg-white pt-1 text-primary-100 transition-all hover:scale-110'>|<span className="absolute h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span></a>
            </div>

            {/* for mobile screen */}
            <div className="content-area md:hidden py-10">
                 <figure className='overflow-hidden m-auto h-90 w-70 rounded-2xl border-2 border-primary-40 transition-all hover:scale-110'>
                     <motion.img initial={{scale:0}} animate={{scale:1}} transition={{duration:1}} src={ProfileImg} alt="profile picture " className='' />
                 </figure>
                 <div className='px-2 text-center'>
                        <motion.div initial={{x:-300}} animate={{x:0}} transition={{duration:1}} className='text-gray-500'>hello, i am</motion.div>
                        <motion.h2 initial={{x:-300}} animate={{x:0}} className='text-xl font-bold uppercase'>Saimun Al <span className='text-primary-100'>Bashar</span></motion.h2>
                        <motion.div initial={{x:300}} animate={{x:0}} transition={{duration:1}} className='text-gray-500'></motion.div>
                        <motion.h2 initial={{x:300}} animate={{x:0}} className='text-xl font-bold'>A Frontend Web Developer & <span className='text-primary-100'> a Ui/Ux Designer</span></motion.h2>
                     </div>
                 <motion.fieldset initial={{scale:0}} animate={{scale:1}} transition={{duration:1}} className='mx-auto mt-10 w-full max-w-[32rem] text-center text-gray-400 transition-all hover:scale-110'>Frontend Developer & Web Designer | React, Tailwind, WordPress, Figma | Building fast, responsive, and visually stunning web experiences</motion.fieldset>

                 <div className='border border-gray-100 shadow bg-primary-100 text-center py-2 px-7 rounded-full font-semibold  w-max m-auto mt-10 tracking-[.3em] hover:scale-115 duration-200'><Link to="/services">See of All Services</Link></div>
            </div>
            
        </section>
    );
};

export default Hero;