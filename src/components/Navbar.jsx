import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = ({ active = 'home', mobile = false, onNavigate }) => {
  return (
    <nav
      id={mobile ? 'mobile-menu' : undefined}
      aria-label={mobile ? 'Mobile navigation' : 'Primary navigation'}
      className={
        mobile
          ? 'mt-4 w-full rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-[6px_3px_4px_rgba(0,0,0,0.2)] md:hidden'
          : 'hidden rounded-full border-t border-gray-200 bg-white/90 px-4 py-3 shadow-[6px_3px_4px_rgba(0,0,0,0.2)] md:block'
      }
    >
      <ul
        className={
          mobile
            ? 'flex flex-col items-start gap-3 font-semibold text-sm'
            : 'flex items-center gap-5 font-semibold text-sm lg:gap-8'
        }
      >
        {navItems.map(({ label, to }) => {
          const isActive = active === label.toLowerCase();

          return (
            <li key={to}>
              <Link
                to={to}
                onClick={onNavigate}
                aria-current={isActive ? 'page' : undefined}
                className={
                  isActive
                    ? 'text-primary-100 transition-colors'
                    : 'text-gray-700 transition-colors hover:text-primary-100'
                }
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;