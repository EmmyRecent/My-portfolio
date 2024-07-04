import { Nav, Hero, Services, Projects, Skills, Contact } from "../sections";
import Footer from "../components/Footer";

const App = () => (
  <>
    <Nav />

    <main>
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <Contact />
    </main>

    <Footer />
  </>
);
export default App;
