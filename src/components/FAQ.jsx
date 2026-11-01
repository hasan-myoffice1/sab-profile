import { useState } from "react";
import SectionHeader from "./SectionHeader";
import faqImg from '/faq.jpg';

const data = {
    'title':"Frequently asked questions about our services",
    'desc': ""
}
const faqs = [
    {
        q: "How long does a website project take?",
        a: "Project timelines depend on complexity, but most business websites are completed within a few weeks, including planning, design, development, testing, and launch.",
    },
    {
        q: "Do you build custom WordPress websites?",
        a: "Yes. I can set up WordPress, customize themes, configure plugins and tailor the site to your content and brand.",
    },
    {
        q: "Why is user experience important for a website?",
        a: "A clear, easy-to-use interface helps visitors find what they need quickly, which makes them more likely to trust the site and take action.",
    },
    {
        q: "Do you provide website support after launch?",
        a: "Yes. Follow-up support and maintenance can be agreed on a per-project basis after the site goes live.",
    },
];


const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    return (
        <section id="faq" className="section-p" >
            <div className="content-area ">
                <div className="text-center max-w-100 m-auto ">
                    <span>COMMON QUESTIONS</span>
                    <SectionHeader dataSend={data}/>
                </div>
                <div className="grid  md:grid-cols-2 gap-10 mt-30">
                    <div className=" relative p-5">
                        <img src={faqImg} alt="" className="z-20 rounded-2xl w-full h-full " />
                        <div aria-hidden="true" className="-z-1 rounded-[22px] border border-primary-100 h-full w-full absolute top-0 right-0  -translate-5" />
                        <div aria-hidden="true" className="-z-1 rounded-[22px] border border-primary-100 h-full w-full absolute top-0 right-0 translate-5"/>
                        <div aria-hidden="true" className="-z-1 rounded-[22px]  border border-primary-100 h-full w-full absolute top-0 right-0"/>
                        <div aria-hidden="true" className="-z-1 rounded-[22px] border border-primary-100 h-full w-full absolute top-0 right-0 -translate-10"/>
                        <div aria-hidden="true" className="-z-1 rounded-[22px] border border-primary-100 h-full w-full absolute top-0 right-0 translate-10"/>
                    </div>

                    {/* Accordion */}
                    <div className="mt-10 md:mt-0 ps-0 md:ps-15">
                    {faqs.map((item, i) => {
                        const open = openIndex === i;
                        const last = i === faqs.length - 1;
                        return (
                        <div key={item.q} className={last ? "" : "border-b border-primary-100/80 pb-8 md:mb-4"}>
                            <h3 className={i === 0 ? "" : "pt-5 md:pt-0"}>
                            <button
                                onClick={() => setOpenIndex(open ? null : i)}
                                aria-expanded={open}
                                aria-controls={`faq-a${i}`}
                                id={`faq-q${i}`}
                                className="flex h-8 w-full items-center justify-between text-left font-inter text-[14px] text-[#1e2a44] md:text-[16px]"
                            >
                                {item.q}
                                <span className="ml-2 text-lg leading-none text-primary-100" aria-hidden="true">
                                {open ? "--" : "+"}
                                </span>
                            </button>
                            </h3>
                            <div id={`faq-a${i}`} role="region" aria-labelledby={`faq-q${i}`} className="accordion-panel" data-open={open} aria-hidden={!open}>
                                <div className="overflow-hidden">
                                    <p className="pt-4 font-inter text-sm leading-6 text-gray-500  ">{item.a}</p>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default FAQ;