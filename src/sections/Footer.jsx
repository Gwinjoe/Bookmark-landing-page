import {navlinks, socialIcons, bookmarkLogo} from "@constants"


const Footer = () => {
  return (
    <footer className="bg-blue-950 lg:px-40 py-10 flex max-sm:flex-col max-sm:gap-8 max-sm:justify-center items-center justify-between">
     <div>
      <img src={bookmarkLogo}/>
    </div> 
     <ul className="text-white text-sm font-extrabold flex gap-6 max-sm:flex-col">{
        navlinks.map(({href, label})=>(
          <li key={label}>
            <a href={href}>{label.toUpperCase()}</a>
          </li>
        ))
     }</ul> 
     <div className="flex gap-6">
      {socialIcons.map(({image, href})=> (
        <a><img src={image} alt={href}/></a>
      ))}
    </div> 
    </footer>
  )
}

export default Footer
