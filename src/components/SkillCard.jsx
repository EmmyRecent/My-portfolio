const SkillCard = ({ label, iconURL }) => {
  return (
    <div className="skills_card w-full max-w-44">
      <div className="grid place-items-center space-y-5 rounded-3xl border border-transparent bg-sectionColor px-4 py-7 grayscale-[85%] duration-300 hover:border-primaryColorLight hover:bg-primaryColor hover:grayscale-0 dark:bg-darkSectionColor">
        <img src={iconURL} alt={label} className="max-w-24" />
      </div>
      <p className="mt-3 text-center capitalize text-primaryColorLight">
        {label}
      </p>
    </div>
  );
};

export default SkillCard;
