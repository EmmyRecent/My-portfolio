import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollAnimation = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    sr.reveal(".hero_image");
    sr.reveal(".hero_content", { origin: "bottom" });

    sr.reveal(".service_top", { origin: "bottom" });
    sr.reveal(".service_item", { origin: "bottom", interval: 300 });

    sr.reveal(".recent_works_top", { origin: "bottom" });
    sr.reveal(".work_card", { origin: "bottom", delay: 1200 });

    sr.reveal(".skills_top", { origin: "bottom" });
    sr.reveal(".skills_card", { origin: "bottom", interval: 300 });

    sr.reveal(".contact_form", { origin: "left" });
    sr.reveal(".contact_item", { origin: "right", interval: 300 });
  }, []);

  return null;
};

export default ScrollAnimation;
