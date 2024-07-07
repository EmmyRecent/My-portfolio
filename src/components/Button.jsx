const Button = ({
  label,
  onLoad,
  onFormSubmit,
  href,
  click,
  isExpanded,
  onExpanded,
  setIsExpanded,
}) => {
  const section = document.getElementById(href);

  const handleButtonClick = (e) => {
    if (onLoad) {
      onLoad();
    }
    if (onFormSubmit) {
      onFormSubmit(e);
    }
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (click) {
      click();
    }
    if (typeof setIsExpanded === "function") {
      setIsExpanded((prevValue) => !prevValue);
      if (onExpanded) {
        onExpanded(!isExpanded);
      }
    }
  };

  return (
    <button
      className={`btn ${onFormSubmit ? "lg:ml-0" : "lg:ml-8"}`}
      onClick={handleButtonClick}
    >
      <span className="z-10">{label}</span>
    </button>
  );
};

export default Button;
