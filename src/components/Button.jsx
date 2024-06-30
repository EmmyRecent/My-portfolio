const Button = ({ label }) => {
  return (
    <button className="btn lg:ml-8">
      <span className="z-10">{label}</span>
    </button>
  );
};

export default Button;
