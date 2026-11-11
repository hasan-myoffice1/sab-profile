import { motion } from "motion/react";
import { Link } from "react-router-dom";
import designServicesIcon from "../assets/ic_outline-design-services.svg";
import CTA from "../components/CTA";
import Process from "../components/Process";
import SmallDiv from "../components/SmallDiv";

const designServices = [
    {
        title: "User research",
        description: "Understand your audience, their needs, and the challenges they face when using your product.",
    },
    {
        title: "Wireframes and user flows",
        description: "Map clear journeys and page structures before moving into visual design.",
    },
    {
        title: "Website and app design",
        description: "Create polished, intuitive interfaces that support your brand and make key tasks easy.",
    },
    {
        title: "Responsive design",
        description: "Design consistent experiences that work smoothly across mobile, tablet, and desktop screens.",
    },
    {
        title: "Prototypes and interaction",
        description: "Explore layouts and interactions in clickable prototypes before development begins.",
    },
    {
        title: "Usability improvements",
        description: "Review existing interfaces and refine them to improve clarity, accessibility, and ease of use.",
    },
];

const UIUXDesign = () => {
    return (
        <main>
            <section className="section-p">
                <div className="content-area">
                    <motion.h1
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="title-1 text-center"
                    >
                        UI/UX Designer Services
                    </motion.h1>

                    <motion.p
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="m-auto mt-4 text-center md:w-150"
                    >
                        I design thoughtful, user-centered digital experiences that make websites and apps easier to use.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="mx-auto flex justify-center py-10 md:w-200 md:py-14"
                    >
                        <img src={designServicesIcon} alt="UI/UX design tools" className="w-44 md:w-60" />
                    </motion.div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="m-auto w-max rounded-full border border-gray-100 bg-primary-100 px-7 py-2 text-center font-semibold tracking-[.3em] shadow duration-200 hover:scale-105"
                    >
                        <Link to="/services">See All Services</Link>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", ease: "easeInOut" }}
                        className="mt-10 text-center text-gray-400"
                    >
                        please Scroll
                    </motion.p>
                </div>
                <SmallDiv />
            </section>

            <section className="section-p">
                <div className="content-area">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="title-1">My UI/UX Design Services</h2>
                        <p className="mt-4">
                            From early research to polished interfaces, I can help create a more useful and enjoyable digital experience.
                        </p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {designServices.map((service, index) => (
                            <article
                                key={service.title}
                                className="group rounded-3xl border border-gray-100 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                            >
                                <span className="mb-5 inline-flex size-11 items-center justify-center rounded-full bg-primary-100 font-semibold">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3 className="mb-3 text-xl font-semibold transition-colors duration-300 group-hover:text-primary-100">
                                    {service.title}
                                </h3>
                                <p>{service.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Process />
            <CTA />
        </main>
    );
};

export default UIUXDesign;
