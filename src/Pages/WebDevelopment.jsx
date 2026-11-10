import CTA from "../components/CTA";
import Process from "../components/Process";
import { Link } from 'react-router-dom';
import web_development_img from '/webdevelopment.png';

const webDevelopmentServices = [
    {
        title: "Create a modern website",
        description: "Design and build a fresh, responsive website tailored to your brand and goals.",
    },
    {
        title: "Customize an existing website",
        description: "Refresh your current website with a new layout, improved content, or a more polished look.",
    },
    {
        title: "Add animations",
        description: "Bring pages to life with smooth, purposeful animations and interactive details.",
    },
    {
        title: "Add new features",
        description: "Extend your website with useful features that make it work better for you and your visitors.",
    },
    {
        title: "Improve mobile experience",
        description: "Make your website easy to use and consistent across phones, tablets, and desktops.",
    },
    {
        title: "Optimize performance",
        description: "Improve loading speed and usability for a smoother browsing experience.",
    },
];

const WebDevelopment = () => {
    return (
         <main>
            <section className="section-p">
                <div className="content-area">
                     <h1 className="title-1 text-center">Web Development</h1>
                     <p className="text-center mt-4 m-auto w-150">I build responsive, scalable, and high-performance websites using modern technologies and best coding practices.</p>
                     <div className="md:w-200 m-auto">
                        <img src={web_development_img} alt="" />
                     </div>
                     <div className='border border-gray-100 shadow bg-primary-100 text-center py-2 px-7 rounded-full font-semibold  w-max m-auto tracking-[.3em] hover:scale-115 duration-200'><Link to="/services">See of All Services</Link></div>
                </div>
           </section>

           <section className="section-p">
                <div className="content-area">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="title-1">My Web Development Services</h2>
                        <p className="mt-4">
                            From a brand-new website to thoughtful updates, I can help make your website work better for you.
                        </p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {webDevelopmentServices.map((service, index) => (
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

           <Process/>
           
           <CTA/>
        </main>
    );
};

export default WebDevelopment;