import useTheme from "../hooks/useTheme";
import { navLinks } from "../constants";
import Button from "./Button";
import { useState } from "react";

const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded((prevValue) => !prevValue);
  };

  return (
    <header className="z-50 py-4">
      <nav className="wrapper relative flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1>Logo.</h1>
        </div>

        {/* Nav links */}
        <div
          className={`fixed left-0 right-0 ${isExpanded ? "top-0" : "top-[-500px]"} z-50 w-full bg-primaryColor py-24 duration-300 lg:static lg:ml-auto lg:block lg:w-auto lg:bg-transparent lg:py-0`}
        >
          <ul className="flex flex-col items-center gap-5 text-center lg:flex-row lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="nav-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <Button label={"Contact Me"} />
            </li>
          </ul>
        </div>

        {/* Hamburger */}
        <div className="flex items-center gap-5">
          <div onClick={toggleTheme}>
            {theme === "light" ? (
              <i className="ri-moon-line ml-4 cursor-pointer text-2xl"></i>
            ) : (
              <i className="ri-sun-line ml-4 cursor-pointer text-2xl"></i>
            )}
          </div>

          <div id="hamburger" className="z-[100]" onClick={handleClick}>
            {isExpanded ? (
              <i
                className={`ri-close-line text-2xl ${isExpanded && "text-whiteColor"} lg:hidden`}
              ></i>
            ) : (
              <i className="ri-menu-2-line text-2xl lg:hidden"></i>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
