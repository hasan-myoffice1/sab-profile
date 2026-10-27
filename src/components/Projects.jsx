import SectionHeader from "./SectionHeader";

const projectItems = [
    {
        title: "Brand Launch",
        category: "Website Design",
        description: "A premium landing page built for a modern brand that needed a clean conversion-first experience.",
        accent: "from-cyan-400 via-sky-500 to-indigo-600",
        offset: "",
    },
    {
        title: "Business Platform",
        category: "Web App",
        description: "A responsive dashboard experience crafted to help teams manage products, sales, and customer touchpoints.",
        accent: "from-violet-500 via-purple-500 to-fuchsia-600",
        offset: "md:translate-y-12",
    },
    {
        title: "Ecommerce Store",
        category: "Shop Design",
        description: "A mobile-friendly storefront with strong visual hierarchy and conversion-driven product sections.",
        accent: "from-emerald-400 via-teal-500 to-cyan-600",
        offset: "",
    },
    {
        title: "Portfolio Site",
        category: "Creative Portfolio",
        description: "A sleek personal brand website focused on storytelling, flow, and exceptional readability on every screen.",
        accent: "from-amber-400 via-orange-500 to-rose-500",
        offset: "md:translate-y-12",
        
    },
];

const Projects = () => {
    const data = {
        title: "Our Latest Projects.",
        desc: "A modern, fully responsive website designed to deliver a seamless experience. Includes clean layouts, fast loading speed, and mobile-friendly design to maximize usability and customer satisfaction.",
    };

    return (
        <section id="projects" className="section-p">
            <div className="content-area">
                <div className="max-w-2xl">
                    <SectionHeader dataSend={data} />
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {projectItems.map(({ title, category, description, accent, offset })=>(
                        <article 
                          key={title}
                          className={`group overflow-hidden rounded-3xl  shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-2 ${offset} bg-gradient-to-br ${accent} relative h-72 overflow-hidden`}>
                            <div className="space-y-4 p-5 sm:p-6 bg-transparent">
                                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-200">
                                    {category}
                                </span>
                                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                                <p className="text-sm leading-6 text-gray-200">{description}</p>
                            </div>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.42),transparent_35%)]" />
                                <div className="absolute -bottom-10 left-6 h-32 w-32 rounded-full border-10 border-white/30 bg-white/10 backdrop-blur-sm" />
                                <div className="absolute bottom-8 right-6 h-20 w-20 rounded-2xl bg-white/10 shadow-[0_12px_30px_rgba(15,23,42,0.15)] backdrop-blur-sm" />
                                <div className="absolute inset-x-8 bottom-8 h-16 rounded-2xl bg-white/15 backdrop-blur-sm" />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;