import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ABHISHEK
              <br />
              <span>SONI</span>
            </h1>
        </div>
<div className="landing-info">
  <h3>A</h3>

  <h2 className="landing-info-h2">
    <span className="landing-h2-1">Designer</span>{" "}
    <span className="landing-h2-2">& Developer</span>
  </h2>
</div>
</div>

        {children}
      </div>
    </>
  );
};

export default Landing;
