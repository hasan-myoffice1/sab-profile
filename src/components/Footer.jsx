import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className='section-p bg-gray-900'>
           
            {/* Brand logo Area */}
            <div className='content-area mb-10'>
                 <img src={logo} alt="My agency logo" className='h-10' />
                 <span className='text-gray-400'>by Saimun al Bashar</span>
            </div>

            <div className="content-area grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Description and contact area */}
                <div>
                    <p className='text-gray-400'> Web developer and UI/UX designer building responsive, user-friendly websites.</p>
                    <h3 className='mt-10 text-gray-300'>Contact-</h3>
                    <p className='text-md text-gray-500 hover:text-gray-200'>saimunallbashar1912@gmail.com</p>
                    <div className='mt-5 flex gap-4'>
                        <div className='size-9 rounded-full bg-gray-800'></div>
                        <div className='size-9 rounded-full bg-gray-800'></div>
                        <div className='size-9 rounded-full bg-gray-800'></div>
                        <div className='size-9 rounded-full bg-gray-800'></div>
                    </div>
                </div>

                {/* Quick link Area */}
                <div className='text-gray-400'>
                   <h3 className='text-gray-300'>Pages -</h3>
                   <ul className='text-sm'>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>FQA</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Policy</li>
                   </ul>
                </div>

                <div>
                    <h3 className='text-gray-300'>Payment Methods</h3>
                    <div className='mt-5 flex flex-wrap gap-4'>
                        <div className='h-10 w-15 rounded-sm bg-gray-800'></div>
                        <div className='h-10 w-15 rounded-sm bg-gray-800'></div>
                        <div className='h-10 w-15 rounded-sm bg-gray-800'></div>
                        <div className='h-10 w-15 rounded-sm bg-gray-800'></div>
                    </div>
                </div>

            </div>

            <hr className="content-area my-10 border border-gray-800 sm:block"/>
            <p className="text-center text-sm sm:col-span-2">
            © <span>{new Date().getFullYear()}</span> Saimun Al Bashar. All rights reserved.
            </p>
        </footer>
    );
}
export default Footer;