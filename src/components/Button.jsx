const Button = ({ label, onLoad }) => {
  return (
    <button
      className="btn lg:ml-8"
      onClick={() => {
        {
          onLoad && onLoad();
        }
      }}
    >
      <span className="z-10">{label}</span>
    </button>
  );
};

export default Button;
