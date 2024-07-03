import SkillCard from "../components/SkillCard";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="bg-sectionColor dark:bg-darkSectionColor">
      <div className="wrapper">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="subtitle capitalize">My Skills</h2>
          <p className="max-w-2xl">
            We transform your ideas and desires into a distinctive web project
            that inspires both you and your customers.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-5 md:gap-3">
          {/* icons */}
          {skills.map((skill) => (
            <SkillCard key={skill.label} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
