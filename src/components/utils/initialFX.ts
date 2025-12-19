import { gsap } from "gsap";

// FREE initial animations (no ScrollSmoother)
const initialFX = () => {
  gsap.from("body", {
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });
};

export default initialFX;
