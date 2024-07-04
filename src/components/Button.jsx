const Button = ({ label, onLoad, type }) => {
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
      }}
    >
      <span className="z-10">{label}</span>
    </button>
  );
};

export default Button;
