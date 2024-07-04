const Overlay = ({ onExpand }) => {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-40 block h-full w-full bg-slate-700 ${onExpand ? "opacity-[0.5]" : "opacity-0"} transition-[opacity] duration-300 ease-in-out`}
    ></div>
  );
};

export default Overlay;
