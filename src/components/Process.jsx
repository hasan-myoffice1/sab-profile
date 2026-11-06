import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";

const data = {
        title: "Our Working Process",
        desc: "A structured development process that ensures every project is delivered on time, within budget, and to the highest quality standards.",
        divClass:"md:w-170 text-center m-auto"
    };

const steps = [
  {
    num: "01", title: "Discovery & Consultation",
    text: "We begin by understanding your business objectives, target audience, and technical requirements to build a clear project roadmap.",
    divClass: 'pt-0 sm:text-left'
  },
  {
    num: "02", title: "Strategy & Planning",
    text: "Our team defines the website architecture, user journey, technology stack, and development strategy to ensure scalability and future growth.",
    divClass: 'md:pt-40 sm:text-left'
  },
  {
    num: "03", title: "UI/UX Design",
    text: "We create engaging interfaces and intuitive user experiences that reflect your brand while improving usability and customer engagement.",
    divClass: 'pt-0 sm:text-left'
  },
  {
    num: "04", title: "Development & Quality Assurance",
    text: "Our developers build clean, secure, and responsive websites while performing continuous testing for performance, compatibility, and security.",
    divClass: 'md:pt-40 sm:text-left'
  },
  {
    num: "05", title: "Launch & Ongoing Support",
    text: "After deployment, we provide continuous maintenance, updates, optimization, and technical support to keep your website performing at its best.",
    divClass: 'pt-10 m-auto text-center'
  },
];


const Process = () => {
    return (
        <section className="section-p">
            <div className="content-area">
                <SectionHeader dataSend={data}/>
                <div className="relative">
                    <svg aria-hidden="true" className="absolute -top-70 right-10 pointer-events-none hidden xl:block" viewBox="0 0 1153 1440" fill="none">
                        <path d="M251 387 C279 390,366 396,417 404 C468 412,523 424,557 434 C591 444,608 454,620 464 C632 474,634 484,632 494 C630 504,622 514,607 524 C592 534,568 544,542 554 C516 564,480 574,454 584 C428 594,403 604,384 614 C365 624,353 634,342 644 C331 654,325 664,320 674 C315 684,314 696,313 704 C312 712,315 721,315 724" stroke="#19d5e6" strokeWidth="3" />
                        <path d="M315 724 C316 728,318 741,322 749 C326 757,328 766,340 774 C352 782,364 793,391 799 C418 805,466 807,500 811 C534 815,570 818,594 824 C618 830,633 836,645 849 C657 862,661 886,664 899 C667 912,665 914,665 924 C665 934,665 948,662 960 C659 972,651 988,646 999 C641 1010,639 1016,634 1024 C629 1032,624 1041,618 1049 C612 1057,608 1065,600 1074 C592 1083,578 1098,573 1103" stroke="#c9d1de" strokeWidth="2" fill="none" />
                        <circle cx="573" cy="1103" r="8" fill="#c9d2e1" />
                    </svg>

                    <div className="flex flex-wrap justify-between">
                        {
                            steps.map((s)=>(
                                <motion.div initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:1}}
                                 className={`sm:w-[50%] sm:ps-10 xl:ps-0 xl:w-120 text-center group ${s.divClass}`} key={s.num}> 
                                    <span className="text-[70px] font-semibold mt-50 text-gray-400 group-hover:text-gray-900 duration-300">{s.num}</span>
                                    <h3 className="text-[20px] group-hover:text-[22px] duration-300">{s.title}</h3>
                                    <p>{s.text}</p>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;