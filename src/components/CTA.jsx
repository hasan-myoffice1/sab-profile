import Button from './Button';
import tea from '/tea.png';

const contactMeButton = {
        link:'#contact',
        text:"Schedule a Consultation"
    };


const CTA = () => {
    return (
        <section aria-labelledby="cta-title" className="section-p mt-20 bg-white pb-14 p-0">
            <div className="content-area">
            {/* Grey panel runs off the right edge of the page, as in the reference */}

            <div className="grid md:px-5 gap-10 md:grid-cols-3 z-0">
                <img
                src={tea}
                alt="Placeholder image of a business handshake"
                loading="lazy"
                className="col-span-1 w-full object-cover md:h-full rounded-2xl z-1"
                />

                <div className="md:col-span-2 shadow-2xl py-10 px-6 md:p-10 rounded-2xl hover:-translate-6 duration-300 hover:border border-primary-40 group relative">
                    <h2 className="title-1 group-hover:text-3xl transition-all duration-300 group-hover:text-primary-100">
                        Let's Build Something special
                    </h2>
                    <p className='my-5'>
                        Whether you're launching a new business, redesigning an existing website, or developing a custom web
                        application, I'm ready to turn your ideas into exceptional digital experiences.
                    </p>
                    <Button info={contactMeButton}  />   
                </div>
            </div>
            </div>   
        </section>
    );
};

export default CTA;