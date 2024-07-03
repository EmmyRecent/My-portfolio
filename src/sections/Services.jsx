import ServiceList from "../components/ServiceList";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="bg-sectionColor dark:bg-darkSectionColor" id="services">
      <div className="wrapper">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="subtitle capitalize">My quality services</h2>
          <p className="max-w-2xl">
            We transform your ideas and desires into a distinctive web project
            that inspires both you and your customers.
          </p>
        </div>

        <div className="my-10">
          {services.map((service) => (
            <ServiceList key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
