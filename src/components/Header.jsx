import Navbar from "./Navbar";
import links from "./navLinks";
import { useEffect, useState } from "react";

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
        <header className="sticky top-0 animate-[header-fade-in_500ms_ease-out_both] z-50">
            <div className="content-area flex flex-wrap items-center justify-between pt-5">
                <a href="#home" aria-label="Saimun Al Bashar, home" className="grid h-9 w-9 place-items-center rounded-full border-2 border-primary-100 bg-gray-50 shadow-[2px_3px_4px_rgba(0,0,0,0.2)]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                        <path d="M12 3 3 11h2.5v9h4.5v-6h4v6h4.5v-9H21z" />
                    </svg>
                </a>
                <Navbar active={active} />

                <div className="flex items-center gap-2">
                    <a href="#contact" className="rounded-full border-primary-100 bg-primary-100 px-6 py-2.5 font-semibold uppercase shadow-[2px_3px_4px_rgba(0,0,0,0.2)]">Let's Talk</a>
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
                    <div className="w-full">
                        <Navbar
                            active={active}
                            mobile
                            onNavigate={() => setOpen(false)}
                        />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;