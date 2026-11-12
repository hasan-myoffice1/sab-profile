import { motion } from "motion/react";

const sd_class = ['w-2 h-2 rounded-full bg-primary-100/50 m-20 ']

const SmallDiv = () => {
    return (
        <div className="-z-1 fixed top-0 flex flex-wrap">
            <motion.div initial={{y:0}} animate={{y:1000}} transition={{repeat:Infinity, duration:3}} className={`${sd_class} `}></motion.div>
            <motion.div initial={{y:0}} animate={{y:1000}} transition={{repeat:Infinity, duration:4,}} className={`${sd_class} `}></motion.div>
            <motion.div initial={{y:0}} animate={{y:1000}} transition={{repeat:Infinity, duration:9,}} className={`${sd_class} `}></motion.div>
            <motion.div initial={{y:0}} animate={{y:1000}} transition={{repeat:Infinity, duration:6}} className={`${sd_class} `}></motion.div>
            <motion.div initial={{y:0}} animate={{y:1000}} transition={{repeat:Infinity, duration:8,}} className={`${sd_class} `}></motion.div>
            <motion.div initial={{y:0}} animate={{y:1000}} transition={{repeat:Infinity, duration:4,}} className={`${sd_class} `}></motion.div>
            <motion.div initial={{y:-100}} animate={{y:1000}} transition={{repeat:Infinity, duration:6}} className={`${sd_class} `}></motion.div>
            <motion.div initial={{y:0}} animate={{y:1000}} transition={{repeat:Infinity, duration:4,}} className={`${sd_class} `}></motion.div>
            <motion.div initial={{y:0}} animate={{y:1000}} transition={{repeat:Infinity, duration:8,}} className={`${sd_class} `}></motion.div>
            <motion.div initial={{y:0}} animate={{y:1000}} transition={{repeat:Infinity, duration:7}} className={`${sd_class} `}></motion.div>
            <motion.div initial={{y:0}} animate={{y:1000}} transition={{repeat:Infinity, duration:6,}} className={`${sd_class} `}></motion.div>
            <motion.div initial={{y:0}} animate={{y:1000}} transition={{repeat:Infinity, duration:5,}} className={`${sd_class} `}></motion.div> 
            <motion.div initial={{y:0}} animate={{y:1000}} transition={{repeat:Infinity, duration:8,}} className={`${sd_class} `}></motion.div>
            <motion.div initial={{y:0}} animate={{y:1000}} transition={{repeat:Infinity, duration:7}} className={`${sd_class} `}></motion.div>
            <motion.div initial={{y:0}} animate={{y:1000}} transition={{repeat:Infinity, duration:6,}} className={`${sd_class} `}></motion.div>
            <motion.div initial={{y:0}} animate={{y:1000}} transition={{repeat:Infinity, duration:5,}} className={`${sd_class} `}></motion.div> 
        </div>
    );
};

export default SmallDiv;