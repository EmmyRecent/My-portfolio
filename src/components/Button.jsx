const Button = ({ label, onLoad, type, href }) => {
  const section = document.getElementById(href);

  return (
    <button
      className={`btn ${type ? "lg:ml-0" : "lg:ml-8"}`}
      onClick={(e) => {
        {
          onLoad && onLoad();
        }
        {
          type && e.preventDefault();
        }
        {
          section && section.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <span className="z-10">{label}</span>
    </button>
  );
};

export default Button;
