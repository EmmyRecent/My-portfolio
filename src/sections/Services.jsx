import ServiceList from "../components/ServiceList";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="bg-sectionColor dark:bg-darkSectionColor" id="services">
      <div className="wrapper">
        <div className="service_top flex flex-col items-center gap-5 text-center">
          <h2 className="subtitle capitalize">My quality services</h2>
          <p className="max-w-2xl">
            We bring your ideas and desires to life with unique web projects
            that captivate and inspire both you and your customers.
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
