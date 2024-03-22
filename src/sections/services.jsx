import { services } from "../constants";
import ServiceCard from "../components/service-card";

const Services = () => {
  return (
    <sections classname="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={services.label} {...service} />
      ))}
    </sections>
  );
};

export default Services;
