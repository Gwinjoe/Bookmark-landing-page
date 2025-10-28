import {navlinks, logo, iconHamburger, iconClose} from "@constants";
import {useState} from "react"

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    { !isOpen ? (
    <nav className="flex justify-between items-center p-6">
      <img src={logo.image} alt="BookMark_Logo" className="w-40"/>
      <div>
      <img src={iconHamburger} className="w-5" onClick={() => setIsOpen(true)}/>
    </div>

    </nav>) : (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-[1000] bg-blue-950 opacity-[0.87] p-6">
      <nav className="flex flex-col gap-12">
      <div className="flex justify-between items-center">
            <img src={logo.image} alt="BookMark_Logo" className="w-40"/>
      <img src={iconClose} className="w-5" onClick={() => setIsOpen(false)}/>
    </div>
      
    <ul className="flex flex-col justify-center items-center text-white">
      {navlinks.map(({href, label})=> (
        <li key={label} className="w-full text-center py-8 border-grey-50 border-t border-b focus:bg-white hover:text-blue-950">
        <a href={href}>{label.toUpperCase()}</a>
        </li>
      ))}
      </ul>
     
      <button className="w-full bg-blue-950 hover:bg-white text-blue-950 text-white border-white p-4 border-2 rounded-lg">LOGIN</button>
      </nav>
      </div>
    )
    }
    </>
  )
}

        // <hr className="w-full bg-grey-50"/>
export default MobileNav

