import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const clickHandlers = useRef<((e: Event) => void)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (!ScrollTrigger.isTouch) return;

    containerRef.current.forEach((container, index) => {
      if (!container) return;

      container.classList.remove("what-noTouch");

      const handler = () => handleClick(container);
      clickHandlers.current[index] = handler;

      container.addEventListener("click", handler);
    });

    return () => {
      containerRef.current.forEach((container, index) => {
        if (!container) return;
        const handler = clickHandlers.current[index];
        if (handler) {
          container.removeEventListener("click", handler);
        }
      });
    };
  }, []);

  return (
    <section className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          {/* CARD 1 */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-content-in">
              <h3>DEVELOP</h3>
              <h4>Description</h4>
              <p>
               Building soft. through college & national hackathons. Sel at the college level for SIH 2025 for AI-based Farmer Query Support System (Govt. of Kerala),
                which I continue to dev independently.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Java</div>
                <div className="what-tags">DSA</div>
                <div className="what-tags">SpringBoot</div>
                <div className="what-tags">DBMS</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">GitHub</div>
                <div className="what-tags">python</div>
                <div className="what-tags">Flask</div>
                <div className="what-tags">VScode</div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-content-in">
              <h3>EXPLORE & GROW</h3>
              <h4>Description</h4>
              <p>
                Exploring modern web technologies while developing strong emotional intelligence—understanding people beyond words,
                 communicating clearly, and growing into a reliable team leader.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Editing</div>
                <div className="what-tags">Canva</div>
                <div className="what-tags">UI</div>
                <div className="what-tags">AI Tools</div>
                <div className="what-tags">UX</div>
                <div className="what-tags">3D Animation</div>
                <div className="what-tags">Character Design</div>
                <div className="what-tags">Modelling</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

// ================= HELPERS =================
function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (!container.parentElement) return;

  const siblings = Array.from(container.parentElement.children) as HTMLElement[];

  siblings.forEach((sibling) => {
    if (sibling !== container) {
      sibling.classList.remove("what-content-active");
      sibling.classList.add("what-sibling");
    }
  });
}
