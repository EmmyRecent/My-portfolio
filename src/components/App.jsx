import { useEffect, useState } from "react";
import { Nav, Hero, Services, Projects, Skills, Contact } from "../sections";
import Footer from "./Footer";
import ScrollUp from "./ScrollUp";
import Overlay from "./Overlay";
import ScrollAnimation from "../animations/ScrollAnimation";

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [expanded, setExpanded] = useState("");

  // Tracks the scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // This function gets data from the child component.
  const getExpanded = (data) => {
    setExpanded(data);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ScrollAnimation />
      <Nav scrollY={scrollY} onExpanded={getExpanded} />

      <Overlay onExpand={expanded} />

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
