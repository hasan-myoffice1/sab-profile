import { motion } from "motion/react";
const img = "/pexels-ken-tomita-127057-389819.jpg";

const ExperiData = [
  [
    "2026",
    "Web Developer & UI/UX Designer",
    "Expanding my expertise in web development while exploring modern backend technologies to build scalable, full-stack web applications."
  ],
  [
    "2025",
    "Backend Development",
    "Started exploring backend development, focusing on server-side programming, database management, and API development."
  ],
  [
    "2024",
    "WordPress Theme Developer",
    "Began developing custom WordPress themes, focusing on theme architecture, customization, responsive layouts, and dynamic content management."
  ],
  [
    "2023",
    "Frontend Web Developer",
    "Started working on modern frontend development using React.js and Tailwind CSS to create responsive and user-friendly web interfaces."
  ],
  [
    "2023",
    "Junior Web Developer & UI/UX Designer",
    "Expanded my skills into UI/UX design by learning Figma and exploring user-centered design principles and modern interface design."
  ],
  [
    "2023",
    "Junior Web Developer",
    "Started my professional journey through an internship at my uncle's IT agency, gaining foundational experience in web development."
  ]
];


const Experience = () => {
    return (
        <div className="grid md:grid-cols-5 gap-10 mt-10 content-center">
            <div className="md:col-span-2 pt-20">
                
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className="w-60 h-50 md:h-110 rounded-full border-3 border-primary-40 bg-cover bg-center bg-fixed  my-auto duration-200 transition-all"
                style={{ backgroundImage: `url("${img}")` }}
                >
                  <div className="h-full w-full border border-primary-100 rounded-full scale-110"></div>
                </motion.div>
                
            </div>
            <div className="md:col-span-3">
                <table>
                    {
                    ExperiData.map(([year, title, desc,])=>(
                        <tr className="group w-full">
                            <th className="p-3 pl-10 text-gray-300 group-hover:text-primary-100 group-hover:text-xl">{year}</th>
                            <td className="border-l border-gray-300">
                                <motion.div initial={{y:200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1}} className="p-5 duration-200 group-hover:shadow-2xl rounded-2xl">
                                  <h4 className="group-hover:text-primary-100 font-semibold group-hover:text-xl duration-150">{title}</h4>
                                  <p className="text-sm text-gray-400">{desc}</p>
                                </motion.div>
                            </td>
                        </tr>
                    ))
                    }
                </table>
            </div>
        </div>  
    );
};

export default Experience;