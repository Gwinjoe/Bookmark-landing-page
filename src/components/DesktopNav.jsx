import {logo, navlinks} from "@constants"

const DesktopNav = () => {
  return (
    <nav className="flex justify-between items-center text-blue-950 px-40 py-8 text-xs tracking-widest">
      <img src={logo.image} alt="BookMark_Logo"/>
      <div className="flex gap-20 items-center justify-center">
      <ul className="flex items-center gap-8">{navlinks.map(({href, label})=> (
        <li key={label} className="">
        <a className="text-blue-950 hover:text-red-400" href={href}>{label.toUpperCase()}</a>
        </li>
      ))}</ul>

    <div>
      <button className="bg-red-400 hover:outline-red-400 hover:outline hover:bg-white font-extrabold rounded-md cursor-pointer py-2 px-8 text-white hover:text-red-400">LOGIN</button>
    </div>
    </div>
    </nav>
  )
}

export default DesktopNav
