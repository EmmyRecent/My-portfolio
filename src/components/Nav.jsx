import useTheme from "../hooks/useTheme";
import { navLinks } from "../constants";
import Button from "./Button";
import { useEffect, useState } from "react";

const Nav = ({ scrollY, onExpanded }) => {
  const { theme, toggleTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 976) {
      setIsExpanded((prevValue) => !prevValue);
      onExpanded(!isExpanded); // Lifting the state up.
    }
  };

  // Handles scroll on the body when navbar is open or closed.
  useEffect(() => {
    const body = document.querySelector("body");

    if (isExpanded) {
      body.classList.add("overflow-y-hidden");
    } else {
      body.classList.remove("overflow-y-hidden");
    }
  }, [isExpanded]);

  // Handles the active links on each section
  useEffect(() => {
    const activeLink = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-link");

      let current = "hero";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((item) => {
        item.classList.remove("active");

        if (item.href.includes(current)) {
          item.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", activeLink);

    return () => {
      window.removeEventListener("scroll", activeLink);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 py-4 ${scrollY >= 200 && "bg-primaryColor"}`}
    >
      <nav
        className={`wrapper relative flex items-center justify-between ${scrollY >= 200 && "text-textColor"}`}
      >
        {/* Logo */}
        <div>
          <a className="cursor-pointer text-4xl font-semibold" href="#">
            {"<"}
            <span className="text-primaryColorLight">{"/"}</span>
            {">"}
          </a>
        </div>

        {/* Nav links */}
        <div
          className={`fixed left-0 right-0 ${isExpanded ? "top-0" : "top-[-100%]"} z-50 w-full bg-primaryColor py-24 duration-500 lg:static lg:ml-auto lg:block lg:w-auto lg:bg-transparent lg:py-0`}
          aria-expanded={isExpanded}
        >
          <ul className="flex flex-col items-center gap-8 text-center lg:flex-row">
            {navLinks.map((link) => (
              <li key={link.label} onClick={handleClick}>
                <a
                  className={`nav-link ${scrollY >= 200 && "text-textColor"}`}
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <Button label={"Contact Me"} href="#contact" />
            </li>
          </ul>
        </div>

        {/* Hamburger */}
        <div
          className={`flex items-center gap-5 ${scrollY >= 200 && "text-textColor"}`}
        >
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
                className={`ri-close-line text-2xl ${isExpanded && "text-textColor"} lg:hidden`}
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
