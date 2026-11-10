
const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Projects", "projects"],
  ["FAQ", "faq"],
  ["Blog", "process"],
  ["Contact", "contact"],
];

const SideNav = ({ active = 'home', onNavigate }) => {
 
    return (
        <nav>
            <ul>
                {
                    links.map(([label, target])=>(
                        <li key={target} className="pb-3 transition-all pl-4">
                            <a 
                              href={`#${target}`}
                              onClick={onNavigate}
                              className={`${active === target ? "text-2xl transition-all duration-75 text-gray-500 ":"text-gray-300 hover:text-2xl transition-all"}`} >{label}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default SideNav;