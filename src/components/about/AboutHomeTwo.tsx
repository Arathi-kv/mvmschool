import React from 'react';
import Link from 'next/link';

const AboutHomeTwo = ({ style_2 }: any) => {
  return (
    <>
      <div className={`it-about__area ${style_2 ? "pt-120 pb-10" : "pt-100 pb-100"}`}>
        <div className="container">

          {/* Centered Title Section */}
          <div className="text-center mb-5">
            <span className="it-section-subtitle d-block mb-2">KNOW ABOUT US</span>
            <h4 className="it-section-title mb-4">
              M.V.M Higher Secondary School
            </h4>
          </div>

          {/* Image + Text Row */}
          <div className="row align-items-stretch">
            
            {/* Left Image */}
            <div 
              className="col-lg-5 mb-4 mb-lg-0 wow itfadeLeft d-flex align-items-stretch" 
              data-wow-duration=".9s" 
              data-wow-delay=".5s"
            >
              <div className="it-about__left-box text-center w-100 h-100">
                <img
                  src="assets/img/about/about2.jpg"
                  alt="MVM Higher Secondary School"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Right Text */}
            <div 
              className="col-lg-7 wow itfadeRight d-flex align-items-stretch" 
              data-wow-duration=".9s" 
              data-wow-delay=".7s"
            >
              <div className="it-about__content ps-lg-4 d-flex flex-column justify-content-center">
                <p className="mb-3">
                  Established in 1986 under Assabah Association Trust, M.V.M Higher Secondary School is a full-fledged institution 
                  from K.G. to Higher Secondary, recognized by the Government of Kerala. MVMRHSS believes that education is not merely 
                  the pursuit of academic excellence but the holistic development of every child. With a vision to nurture intellectually vibrant, 
                  morally upright, and socially responsible individuals, our school provides a dynamic learning environment blending tradition with 
                  modern educational practices.
                </p>

                <p className="mb-3">
                  Guided by a team of dedicated and experienced teachers, MVMRHSS focuses on fostering curiosity, creativity, and critical thinking 
                  in every learner. Our curriculum is complemented by a wide range of co-curricular and extracurricular activities designed to 
                  develop leadership, confidence, and character. With state-of-the-art facilities, a strong value-based education system, and 
                  personalized mentoring, MVMRHSS stands as a centre of excellence where students are inspired to dream, strive, and achieve.
                </p>

                <p className="mb-0">
                  Rooted in strong moral values and a commitment to excellence, our school provides a dynamic learning atmosphere that shapes students 
                  into confident and responsible individuals ready to face the challenges of the modern world.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default AboutHomeTwo;
