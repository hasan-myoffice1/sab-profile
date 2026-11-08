
import { useState } from 'react';
import Services from '../components/Services';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import img_sofa from '/sofa.jfif';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const formInp = {
  wrapper: 'border border-gray-200 shadow-sm flex flex-col rounded-2xl px-6 py-3 transition-colors hover:border-primary-100',
  label: 'mb-1 text-sm font-semibold text-gray-600 -mt-5 bg-white w-max px-4',
  input: 'my-1 w-full bg-transparent text-base text-gray-700 outline-none placeholder:text-gray-400',
};

const Contact = () => {
    // ------------------------------------------- Email js code
    const form = useRef();
    const [submittedName, setSubmittedName] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [sendError, setSendError] = useState('');

    const sendEmail = async (e) => {
      e.preventDefault();
      setIsSending(true);
      setSendError('');

      try {
        await emailjs.sendForm('service_9fd16qc', 'template_eg0o7ck', form.current, {
          publicKey: 'trgycaboRXt2FdKsi',
        });
        setSubmittedName(new FormData(form.current).get('name')?.toString().trim() || 'there');
      } catch {
        setSendError('Your message could not be sent right now. Please try again in a moment.');
      } finally {
        setIsSending(false);
      }
    };
    // -------------------------------------------

    return (
        <main>
          <section className="section-p">
            <div className="content-area">
               <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                 <div>
                   <img src={img_sofa} alt="" className="w-full rounded-3xl " />
                 </div>
                 <div>
                    {submittedName ? (
                      <section
                        aria-live="polite"
                        className="rounded-3xl border border-primary-40 bg-gradient-to-br from-cyan-50 via-white to-sky-50 p-8 shadow-xl md:p-10"
                      >
                        <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-primary-100 text-white shadow-lg shadow-cyan-200">
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-8">
                            <path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Message sent</p>
                        <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">Thank you, {submittedName}!</h1>
                        <p className="mb-8">
                          Your message is on its way. I appreciate you reaching out and will get back to you soon.
                        </p>
                        <button
                          type="button"
                          onClick={() => setSubmittedName('')}
                          className="rounded-full bg-primary-100 px-6 py-3 font-semibold text-gray-900 shadow-md transition-transform duration-300 hover:scale-105"
                        >
                          Send another message
                        </button>
                      </section>
                    ) : (
                    <form ref={form} onSubmit={sendEmail} className="space-y-5">
                      <div className="mb-7">
                        <p className="mb-2 font-semibold capitalize tracking-[3px] text-cyan-700 font-primary text-sm">Let's start a conversation</p>
                        <h1 className="mb-3 text-3xl font-bold text-gray-800 md:text-4xl">Tell me about your project</h1>
                      </div>
                      {sendError && (
                        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                          {sendError}
                        </p>
                      )}
                      <div className={formInp.wrapper}>
                        <label htmlFor="name" className={formInp.label}>Your name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className={formInp.input}
                          placeholder="Enter your full name"
                          autoComplete="name"
                          required
                        />
                      </div>
                      <div className={formInp.wrapper}>
                        <label htmlFor="email" className={formInp.label}>Your email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={formInp.input}
                          placeholder="Enter your email address"
                          autoComplete="email"
                          required
                        />
                      </div>
                      <div className={formInp.wrapper}>
                        <label htmlFor="message" className={formInp.label}>Your message</label>
                        <textarea
                          id="message"
                          name="message"
                          className={`${formInp.input} resize-y`}
                          rows={5}
                          placeholder="Tell me a little about your project"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSending}
                        className="ml-auto block rounded-full bg-primary-100 px-7 py-3 font-semibold uppercase shadow-[2px_3px_4px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-105"
                        value="Send"
                      >
                        {isSending ? 'Sending...' : 'Send message'}
                      </button>
                    </form>
                    )}
                 </div>
               </div>
            </div>
          </section>
          <Services/>
          <Process/>
          <FAQ/>
        </main>
    );
};

export default Contact;