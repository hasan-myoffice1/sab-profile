import { motion } from 'motion/react';
import ProfileImg from '/tea.png'



const Hero = () => {
    return (
        <section id="home" className="section-p h-screen">
            <div className="content-area pt-10 hidden md:block">
                 <figure className='relative m-auto border-2 border-primary-40 h-90 w-70 rounded-2xl hover:scale-110 transition-all'>
                     <motion.img initial={{scale:0}} animate={{scale:1}} src={ProfileImg} alt="profile picture " className='' />
                     <div className='absolute -top-7 -right-45 bg-white px-2'>
                        <motion.div initial={{x:-300}} animate={{x:0}} transition={{duration:1}} className='text-gray-500'>hello, i am</motion.div>
                        <motion.h2 initial={{x:-300}} animate={{x:0}} transition={{duration:0.6}} className='text-4xl font-bold uppercase'>Saimun Al <br/> <span className='text-primary-100'>Bashar</span></motion.h2>
                     </div>
                     <div className='absolute bottom-0 -left-70 text-end bg-white'>
                        <motion.div initial={{x:300}} animate={{x:0}} transition={{duration:1}} className='text-gray-500'>A Frontend</motion.div>
                        <motion.h2 initial={{x:300}} animate={{x:0}} transition={{duration:0.6}} className='text-4xl font-bold'>Web Developer &<br/> <span className='text-primary-100'> a Ui/Ux Designer</span></motion.h2>
                     </div>
                 </figure>
                 <motion.fieldset initial={{scale:0}} animate={{scale:1}} transition={{duration:1}} className='mx-auto w-130 text-center text-gray-400 mt-10 hover:scale-110 transition-all'>Frontend Developer & Web Designer | React, Tailwind, WordPress, Figma | Building fast, responsive, and visually stunning web experiences</motion.fieldset>
                 <a href='#about' className='relative w-7 h-10 rounded-2xl border-2 border-primary-40 flex align-middle justify-center text-primary-100 pt-1 m-auto mt-20 hover:scale-110 transition-all bg-white'>|<span class="absolute h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span></a>       
            </div>
            <div className="content-area md:hidden">       
                 <figure className='relative m-auto border-2 border-primary-40 h-90 w-70 rounded-2xl hover:scale-110 transition-all'>
                     <motion.img initial={{scale:0}} animate={{scale:1}} transition={{duration:1}} src={ProfileImg} alt="profile picture " className='' />
                 </figure>
                 <div className='text-center px-2'>
                        <motion.div initial={{x:-300}} animate={{x:0}} transition={{duration:1}} className='text-gray-500'>hello, i am</motion.div>
                        <motion.h2 initial={{x:-300}} animate={{x:0}} className='text-xl font-bold uppercase'>Saimun Al <span className='text-primary-100'>Bashar</span></motion.h2>
                        <motion.div initial={{x:300}} animate={{x:0}} transition={{duration:1}} className='text-gray-500'></motion.div>
                        <motion.h2 initial={{x:300}} animate={{x:0}} className='text-xl font-bold'>A Frontend Web Developer & <span className='text-primary-100'> a Ui/Ux Designer</span></motion.h2>
                     </div>
                 <motion.fieldset initial={{scale:0}} animate={{scale:1}} transition={{duration:1}} className='mx-auto md:w-130 text-center text-gray-400 mt-10 hover:scale-110 transition-all'>Frontend Developer & Web Designer | React, Tailwind, WordPress, Figma | Building fast, responsive, and visually stunning web experiences</motion.fieldset>
                 <a href='#about' className='relative w-7 h-10 rounded-2xl border-2 border-primary-40 flex align-middle justify-center text-primary-100 pt-1 m-auto mt-20 hover:scale-110 transition-all bg-white'>|<span class="absolute h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span></a>       
            </div>
            
        </section>
    );
};

export default Hero;