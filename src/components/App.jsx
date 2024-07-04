import { useEffect, useState } from "react";
import { Nav, Hero, Services, Projects, Skills, Contact } from "../sections";
import Footer from "../components/Footer";
import ScrollUp from "./ScrollUp";

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  // Tracks the scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Nav scrollY={scrollY} />

      <main>
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <ScrollUp scrollY={scrollY} />
    </>
  );
};

export default App;
