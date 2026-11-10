import Navbar from "./Navbar";
import links from "./navLinks";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SideNav from './SideNav';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(entry.target.id);
            }),
            { rootMargin: "-40% 0px -55% 0px" },
        );

        links.forEach(([, id]) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header className="sticky top-0 z-50 animate-[header-fade-in_500ms_ease-out_both]">
            <div className="content-area flex flex-wrap items-center justify-between gap-3 pt-5">
                <Link
                    to="/me"
                    aria-label="Saimun Al Bashar, home"
                    className="grid h-9 w-9 place-items-center rounded-full border-2 border-primary-100 bg-gray-50 shadow-[2px_3px_4px_rgba(0,0,0,0.2)]"
                >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                        <path d="M12 3 3 11h2.5v9h4.5v-6h4v6h4.5v-9H21z" />
                    </svg>
                </Link>
                 <video
                    className="pointer-events-none top-10 left-145 fixed z-0 h-auto  object-center"
                    src="/flying%20bird.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                />

                <Navbar />
                
                <video
                    className="pointer-events-none top-10 right-130 fixed z-0 h-auto  object-center"
                    src="/flying%20bird.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                />

                <div className="flex items-center gap-2">
                    <Link
                        to="/contact"
                        className="hidden rounded-full border-primary-100 bg-primary-100 px-4 py-2.5 text-xs font-semibold uppercase shadow-[2px_3px_4px_rgba(0,0,0,0.2)] transition-transform hover:scale-[1.02] sm:inline-flex sm:px-6 sm:text-sm"
                    >
                        Let&apos;s Talk
                    </Link>
                    <button
                        type="button"
                        onClick={() => setOpen((isOpen) => !isOpen)}
                        className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 md:hidden"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? "Close menu" : "Open menu"}
                    >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                            <path d="M4 7h16M4 12h16M4 17h16" />
                        </svg>
                    </button>
                </div>

                {open && (
                    <div className="w-full md:hidden">
                        <Navbar
                            mobile
                            onNavigate={() => setOpen(false)}
                        />
                    </div>
                )}
            </div>
            <div className="hidden xl:block fixed top-70 right-0 md:w-30">
                <SideNav active={active} />
            </div>
        </header>
    );
};

export default Header;