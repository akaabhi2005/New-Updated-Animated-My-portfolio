import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Summer Intern</h4>
                <h5>SRDT Pvt. Ltd. · Internship (On-site)</h5>
              </div>
              <h3>2025 </h3>
            </div>
            <p>
             • Completed a Full Stack Development internship using Python Flask, MySQL, HTML, and CSS  
             • Worked on backend routing, CRUD operations, and database integration  
             • Gained practical experience in building and deploying small-scale applications


            </p>
          </div>

          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HONORS & AWARDS</h4>
                <h5>Winner – IIC & Cloud Cell Hackathon </h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Won the IIC & Cloud Cell Hackathon 2025 as part of a 4-member team.
               Contributed to brainstorming, development, and presentation of the final solution, showcasing teamwork,
                problem-solving, and technical implementation.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assistant Coordinator</h4>
                <h5>The Social Media Club</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              • Assisted in coordinating activities and managing team operations,  
                Supported communication, planning, and execution of club initiatives  
               & Developed leadership, teamwork, and organizational skills

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
