import {useState, useEffect} from "react";

import logo from '../../assets/images/logo.svg'
import menu from '../../assets/images/icon-menu.svg'
import menuClose from '../../assets/images/icon-menu-close.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 770) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="flex justify-between items-center">
      {/* logo */}
      <img src={logo} alt="World News logo" className="h-3.5 lg:h-5 transition-h duration-500" />

      {/* backdrop shadow */}
      {isOpen && <div className={`md:hidden absolute inset-0 bg-navy-950/25 z-10`}></div>}
      <nav className="">
        <ul
          className={`
            flex gap-5 text-preset-6 bg-white text-navy-600
            max-md:flex-col max-md:fixed max-md:z-20 max-md:pt-18 max-md:pl-4.5 max-sm:pl-2.5
            max-md:right-0 max-md:inset-y-0 max-md:left-[60%] max-sm:left-[30%]
            transform transition-transform duration-500 ease-in-out
            ${isOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'}
          `}
        >
          <li><a href="#">Home</a></li>
          <li><a href="#">New</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Categories</a></li>
        </ul>
      </nav>
      <button className="max-md:relative md:hidden z-30 h-5 w-5 flex justify-center items-center">
        <img src={isOpen ? menuClose : menu} alt="" className="" onClick={()=>setIsOpen(!isOpen)}/>
      </button>
    </header>
  )
}