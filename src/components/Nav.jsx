import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"
import { hamburger } from "../assets/icons"



const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img width={129} height={29} className="m-0 w-[129px] h-[29px]" src={headerLogo} alt="logo" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map(navLink => (
            <li key={navLink.label}>
              <a className="font-montserrat leading-normal text-lg text-slate-gray" href={navLink.href}>
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            <a href="/">Sign in</a>
            <span>/</span>
            <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <img width={25} height={25} src={hamburger} alt="hamburger icon" />
        </div>
      </nav>
    </header>
  )
}

export default Nav