import Nav from "./Nav";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Projects from "../sections/Projects";

const App = () => {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <Services />
        {/* <Projects /> */}
      </main>
    </>
  );
};

export default App;
