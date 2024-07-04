import ProjectList from "../components/ProjectList";
import Button from "../components/Button";
import { projects } from "../constants";
import { useState } from "react";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const increment = 4;

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + increment);
  };

  return (
    <section id="projects">
      <div className="wrapper">
        <div className="recent_works_top flex flex-col items-center gap-5 text-center">
          <h2 className="subtitle capitalize">My Projects</h2>
          <p className="max-w-2xl">
            Here are some of the web projects I&apos;ve built, showcasing my
            ability to transform ideas into impactful digital experiences.
          </p>
        </div>

        <div className="relative mt-6 rounded-3xl">
          {/* blob */}
          <div className="absolute left-1/2 top-1/2 -z-30 h-80 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primaryColorLight opacity-50 mix-blend-screen blur-[150px]"></div>

          <div>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-10">
              {projects.slice(0, visibleCount).map((project) => (
                <ProjectList key={project.label} {...project} />
              ))}
            </ul>

            {visibleCount < projects.length && (
              <div className="mt-8 flex justify-center">
                <Button label="Load more" onLoad={loadMore} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
