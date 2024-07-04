import { navLinks } from "../constants";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="bg-sectionColor py-10 dark:bg-darkSectionColor">
      <div className="wrapper flex flex-col items-center gap-5">
        <div className="py-5">
          <a className="cursor-pointer text-4xl font-semibold" href="#">
            {"<"}
            <span className="text-primaryColorLight">{"/"}</span>
            {">"}
          </a>
        </div>

        <div>
          <ul className="flex flex-wrap items-center justify-center space-x-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-primaryColorLight">
          <p>
            &copy; {year} All rights reserved by{" "}
            <a className="font-bold" href="https://chukwuemeka-e.vercel.app">
              Chukwuemeka
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
