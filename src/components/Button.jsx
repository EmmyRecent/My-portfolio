const Button = ({
  label,
  onLoad,
  type,
  href,
  click,
  isExpanded,
  onExpanded,
  setIsExpanded,
}) => {
  const section = document.getElementById(href);

  const handleButtonClick = (e) => {
    {
      onLoad && onLoad();
    }
    {
      type && e.preventDefault();
    }
    {
      section && section.scrollIntoView({ behavior: "smooth" });
    }
    {
      click && click();
    }
    {
      typeof setIsExpanded === "function" &&
        setIsExpanded((prevValue) => !prevValue),
        onExpanded(!isExpanded);
    }
  };

  return (
    <button
      className={`btn ${type ? "lg:ml-0" : "lg:ml-8"}`}
      onClick={handleButtonClick}
    >
      <span className="z-10">{label}</span>
    </button>
  );
};

export default Button;
