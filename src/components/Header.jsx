import { useState } from "react";
import { v4 as uuid } from "uuid";
import { IoIosSend } from "react-icons/io";
import { CgMenuBoxed } from "react-icons/cg";

function NavLinks() {
    const links = ["Home", "About Us", "Services", "Destination", "Contact Us"];
    const [setActiveLink] = useState("Home");
    return(
      <ul className="flex flex-col gap-5 p-2 lg:flex-row">
          {links.map((link)=>{
              return <li key={uuid()} onClick={()=>setActiveLink(link)}>
                  <a href={`#${link}`} className='font-bold text-sm text-white'>{link}</a>
                  </li>
          })}
      </ul>
    )
}
function NavBtn() {
    return <button className="bg-white rounded-full border text-Primary border-Primary px-5 py-2 flex items-center justify-between gap-1 md:font-bold">Customize a tour <IoIosSend/></button>
}

function Header() {
    const [menu , setMenu] = useState(false);
  return (
    <header className="absolute w-full top-0 left-0 border-b border-white z-30">
      <nav className="relative flex justify-between items-center py-5 px-3 md:px-10 lg:px-40" >
        <h3 className="text-xl font-bold md:text-2xl lg:text-3xl font-serif"><span className="text-white">Travel</span><span className="text-Primary">linoo</span></h3>
        <div className="hidden lg:flex"><NavLinks/></div>
        <div className="hidden lg:flex"><NavBtn/></div>
        <button className="flex font-bold text-4xl text-white lg:hidden" onClick={()=>setMenu(!menu)}><CgMenuBoxed/></button>
        {
            menu && <div className="flex flex-col gap-3 absolute w-screen top-full left-0 items-center py-3 backdrop-blur-md lg:hidden">
                <NavLinks/>
                <NavBtn/>
            </div>
        }
      </nav>
    </header>
  )
}
export default Header;
