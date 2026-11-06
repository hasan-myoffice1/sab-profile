import { motion } from "motion/react";
import Experience from "./Experience";
import SectionHeader from "./SectionHeader";

const skillsData = [
  ["React", "Component-based scalable UI development","last 0.6 year" ],
  ["Tailwind CSS", "Utility-first styling for modern interfaces","last 1 year"],
  ["WordPress", "Custom themes, plugins and site setup", "2.5 year experience"],
  ["JavaScript", "Dynamic and interactive web functionality", "3 year experience"],
  ["Bootstrap", "Responsive layout and fast UI development","2 year experience" ],
  ["PHP", "Server-side logic and web applications", "2 year experience"],
  ["MySQL", "Database design and query optimization","2 year experience" ],
  ["Git & GitHub", "Version control and collaboration", "3 year experience"],
  ["Responsive Design", "Layouts that fit every screen","3 year experience" ],
  ["Figma", "UI design, wireframes, and interactive prototypes", "3 year experience"],
  ["Vue", "Reactive frontend applications", "2 projects"],
];

const data = {
        'title':"Skills & Experience",
        'desc': ""
    }
    


// Decorative ring (no ratings are claimed)
function Ring() {
  return (
    <svg viewBox="0 0 50 50" className="h-12 w-12" aria-hidden="true">
      <circle cx="25" cy="25" r="22" fill="none" stroke="#c9ccd3" strokeWidth="3" />
      <circle
        cx="25" cy="25" r="22" fill="none" stroke="#20d5ea" strokeWidth="5.5" strokeLinecap="round"
        strokeDasharray="108 138" transform="rotate(-80 25 25)"
      />
    </svg>
  );
}   
const Skills = () => {
    return (
        <section className="section-p">
            <div className="content-area">
                <div className="max-w-2xl">
                     <SectionHeader dataSend={data}/>
                </div>
                
                <Experience/>
                
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-3 md:grid-cols-4 mt-20">
                   {
                    skillsData.map(([name, text,exp]) => (
                        
                        <motion.div initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:1}} 
                        className="px-5 py-6 shadow-xl rounded-2xl relative overflow-hidden touch">
                            <div aria-hidden='true' className="absolute right-0 top-0 rounded-bl-xl h-9 w-17 bg-black/5.5"></div>
                            <div aria-hidden='true' className="absolute right-0 top-0 h-19 rounded-bl-xl w-8 bg-black/5.5"></div>
                            <Ring />
                            <h4 className="mt-2 font-semibold">{name}</h4>
                            <p className="text-sm">{text}</p>
                            <span className="text-sm text-gray-400">{exp}</span>
                        </motion.div>
                    ))
                   }
                </div>
                
            </div>
            
            
        </section>
    );
};

export default Skills;