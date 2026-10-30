import Button from "./Button";
import tea from '/public/tea.png';
// import { useEffect, useRef, useState } from "react";

const About = () => {
    // const sectionRef = useRef(null);
    // const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     const section = sectionRef.current;
    //     if (!section) return;

    //     const observer = new IntersectionObserver(
    //         ([entry]) => setIsVisible(entry.isIntersecting),
    //         { threshold: 0.9 },
    //     );

    //     observer.observe(section);
    //     return () => observer.disconnect();
    // }, []);

    // data
    const contactMeButton = {
        link:'#contact',
        text:"Contact Me"
    };

    return (
        <section
            // ref={sectionRef}
            id="about"
            // className={`section-p relative min-h-screen transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
            className={`section-p transition-opacity duration-700`}
        >
            <div className="content-area grid md:grid-cols-2 px-5 overflow-visible">
                <div>
                    <svg viewBox="0 0 424 440" className="w-full overflow-visible" aria-hidden="true">
                        <g fill="#11dcea" fillOpacity="0.4">
                        <circle cx="262" cy="143" r="131" className="circle-animation"/>
                        <circle cx="143.5" cy="223" r="131" className="circle-animation" />
                        <circle cx="291.5" cy="273" r="131" className="circle-animation" />
                        </g>
                        <g fontFamily="Duru Sans, sans-serif" fontSize="28" fontWeight="700" fill="#000" textAnchor="middle" stroke="#000" strokeWidth="0.6">
                        <text x="276" y="109">code</text>
                        <text x="86" y="243">design</text>
                        <text x="309" y="317">seo</text>
                        </g>
                    </svg>
                </div>
                <div className="flex flex-col justify-center p-0 md:ps-20">
                    <h2 className="title-1"> I am a dedicated web developer based in Bangladesh.</h2>
                    <p className="para mt-4">
                         I specialize in building modern, responsive, and user-friendly websites
                        and web applications. My focus is on writing clean code, creating intuitive UI/UX, and delivering reliable solutions that help businesses grow online.
                    </p>
                    <p className="para mt-4">
                        I enjoy solving real-world problems through technology and continuously
                        improving my skills by learning new tools, frameworks, and industry best
                        practices.
                    </p>
                    <div className="mt-4 group">
                        <Button info={contactMeButton}  />
                        <div className="w-100 absolute left-0 bottom-0 -translate-x-100  group-hover:translate-x-5 transform-all duration-300">
                             <p className="w-max rounded-full border-primary-100 bg-primary-100 px-6 py-2.5 font-semibold uppercase shadow-[2px_3px_4px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300">Hello</p>
                             <p className="w-max rounded-full border-primary-100 bg-primary-100 px-6 py-2.5 font-semibold uppercase shadow-[2px_3px_4px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300 mt-2">Give me your 30 mins</p>
                            <img src={tea} alt="" className="w-full  object-cover" />
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default About;