const ServiceList = ({ id, label, description }) => {
  return (
    <div className="service_item">
      <div className="flex items-center gap-3 text-xl font-bold md:w-[40%] md:text-2xl">
        <p className="text-primaryColorLight hover:text-whiteColor">{id}</p>
        <p>{label}</p>
      </div>

      <div className="ml-auto origin-center rotate-45 text-2xl md:order-last">
        <i className="fa-solid fa-arrow-right-long"></i>
      </div>

      <div className="md:max-w-[330px] lg:max-w-md xl:max-w-lg">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceList;
