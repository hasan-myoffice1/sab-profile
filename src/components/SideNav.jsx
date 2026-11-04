import links from "./navLinks";

const SideNav = ({active, onNavigate}) => {
    return (
        <nav>
            <ul>
                {
                    links.map(([lable, target])=>(
                        <li key={target} className="mb-3 transition-all">
                            <a 
                              href={`#${target}`}
                              onClick={onNavigate}
                              className={`${active === target ? "text-2xl transition-all duration-75 text-primary-100 ":"text-gray-500"} `} >--{lable}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default SideNav;