import { useState } from "react";
import { nanoid } from 'nanoid'

import logo from '../../assets/images/logo.svg'
import menu from '../../assets/images/icon-menu.svg'
import menuClose from '../../assets/images/icon-menu-close.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function NavList(){
    const navPageArray = [
      {name: 'Home', href:'#'},
      {name: 'New', href:'#'},
      {name: 'Popular', href:'#'},
      {name: 'Trending', href:'#'},
      {name: 'Categories', href:'#'}
    ]

    return navPageArray.map(page=> <li key={nanoid()} ><a href={page.href} className="hover:text-red transition-colors duration-500">{page.name}</a></li>)
  }

  return (
    <header className="flex justify-between items-center">
      {/* logo */}
      <img src={logo} alt="World News logo" className="h-3.5 lg:h-5 transition-h duration-500" />

      {/* backdrop shadow*/}
      {isOpen && <div className="md:hidden absolute inset-0 z-10 bg-navy-950/25"></div>}

      {/* mobile and tablet navbar */}
      <nav>
        <ul className={`
          text-preset-5 text-navy-950 bg-white
          flex flex-col gap-3
          fixed z-20 inset-y-0 right-0 left-[30%] sm:left-[60%]
          pt-18 pl-2.5 sm:pl-4.5
          md:hidden
          transform transition-all duration-1000 ease-in-out
          ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`
        }>
          <NavList/>
        </ul>

        {/* desktop navbar */}
        <ul className="hidden text-preset-6 md:flex gap-5 opacity-0 md:opacity-100">
          <NavList/>
        </ul>
      </nav>

      <button className="max-md:relative md:hidden z-30 h-5 w-5 flex justify-center items-center cursor-pointer">
        <img src={isOpen ? menuClose : menu} alt="" onClick={()=>setIsOpen(!isOpen)}/>
      </button>
    </header>
  )
}