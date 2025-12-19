import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Work: React.FC = () => {
  const workRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!workRef.current) return;

    // Safe GSAP animation (prevents opacity stuck issues)
    gsap.fromTo(
      workRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section id="work" className="work-section" ref={workRef}>
      <h2>My Work</h2>

      <div className="work-items">
        <div className="work-card">AI Based Farmer Query Support System</div>
        <div className="work-card">Full Stack Intership Project</div>
        <div className="work-card">5+ Hackthon Projects</div>
      </div>
    </section>
  );
};

export default Work;
