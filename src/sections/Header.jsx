import DesktopNav from "@components/DesktopNav.jsx";
import MobileNav from "@components/MobileNav.jsx";

const Header = () => {
  return (
    <header>
      <div className="max-lg:hidden">
      <DesktopNav/>
    </div>
    <div className="hidden max-lg:block">
    <MobileNav/>
    </div>
    </header>
  )
}

export default Header
