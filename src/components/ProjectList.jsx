const ProjectList = ({ label, description, imgURL, link }) => {
  return (
    <li className="work_card relative cursor-pointer overflow-hidden rounded-2xl border border-transparent bg-sectionColor p-5 duration-300 hover:border-primaryColor dark:bg-darkSectionColor lg:p-8">
      <img src={imgURL} alt="Recent projects" className="w-full" />

      <div
        onClick={() => {
          window.location.href = link;
        }}
        className="absolute bottom-[-100%] left-0 right-0 p-5 lg:p-8"
      >
        <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-primaryColorLight to-primaryColor p-5 text-whiteColor">
          <div>
            <p className="text-2xl font-bold lg:text-3xl">{label}</p>
            <p>{description}</p>
          </div>

          <div className="rotate-45 text-2xl">
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectList;
