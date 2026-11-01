import links from "./navLinks";

const Navbar = ({ active, mobile = false, onNavigate }) => {
    return (
        <nav
            id={mobile ? "mobile-menu" : undefined}
            aria-label={mobile ? "Mobile" : "Primary"}
            className={`${mobile ? "mt-4 w-full rounded-2xl md:hidden" : "hidden rounded-full md:block"} bg-gray-50 px-8 py-3 shadow-[6px_3px_4px_rgba(0,0,0,0.2)]`}
        >
            <ul className={`flex ${mobile ? "flex-col" : "items-center"} gap-6`}>
                {links.map(([label, target]) => (
                    <li key={target}>
                        <a
                            href={`#${target}`}
                            onClick={onNavigate}
                            aria-current={active === target ? "location" : undefined}
                            className={`font-semibold ${active === target ? "text-primary-100" : "text-gray-600"}`}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;