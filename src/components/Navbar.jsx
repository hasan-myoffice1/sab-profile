import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const navItems = [
  // { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

const serviceItems = [
  { label: 'Web Development', to: '/services#web-development' },
  { label: 'WordPress', to: '/services#wordpress' },
  { label: 'UI/UX Design', to: '/services#ui-ux-design' },
  { label: 'SEO', to: '/services#seo' },
];

const Navbar = ({ mobile = false, onNavigate }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav
      id={mobile ? 'mobile-menu' : undefined}
      aria-label={mobile ? 'Mobile navigation' : 'Primary navigation'}
      className={
        mobile
          ? 'mt-4 w-full rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-[6px_3px_4px_rgba(0,0,0,0.2)] md:hidden'
          : 'hidden rounded-full border-t border-gray-200 bg-white/90 px-10 py-3 shadow-[6px_3px_4px_rgba(0,0,0,0.2)] md:block'
      }
    >
      <ul
        className={
          mobile
            ? 'flex flex-col items-start gap-3 font-semibold text-sm'
            : 'flex items-center gap-5 font-semibold text-sm lg:gap-8'
        }
      >
        {navItems.map(({ label, to }) => (
          <li
            key={to}
            className={label === 'Services' ? 'group/services relative' : undefined}
          >
            <div className="flex items-center gap-1">
              <NavLink
                to={to}
                end={to === '/'}
                onClick={onNavigate}
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary-100 decoration-2 transition-colors'
                    : 'text-gray-700 transition-colors hover:text-primary-100'
                }
              >
                {label}
              </NavLink>
              {label === 'Services' && (
                <button
                  type="button"
                  className="rounded p-1 text-gray-700 hover:text-primary-100"
                  aria-label="Toggle service links"
                  aria-expanded={mobile ? servicesOpen : undefined}
                  onClick={() => setServicesOpen((isOpen) => !isOpen)}
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="m5 7 5 5 5-5" />
                  </svg>
                </button>
              )}
            </div>
            {label === 'Services' && (
              <ul
                className={
                  mobile
                    ? `${servicesOpen ? 'mt-2 flex' : 'hidden'} flex-col gap-2 border-l border-gray-200 pl-4`
                    : 'absolute top-5 left-0 z-50  hidden min-w-48 flex-col gap-1 rounded-xl border border-gray-200 bg-white p-2 shadow-lg group-hover/services:flex group-focus-within/services:flex'
                }
              >
                {serviceItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={onNavigate}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary-100"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

    </nav>
  );
};

export default Navbar;