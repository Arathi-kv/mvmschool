import React from 'react';
import Link from 'next/link';

const AboutHomeTwo = ({ style_2 }: any) => {
  return (
    <>
      <div className={`it-about__area ${style_2 ? "pt-120 pb-120" : "pt-100 pb-100"}`}>
        <div className="container">
          <div className="row align-items-start">
            
            {/* Left Image Section */}
            <div className="col-xl-5 col-lg-6 wow itfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-about__left-box p-relative text-end">
                <div className="it-about__thumb">
                  <img 
                    src="assets/img/gallery/img6.jpg" 
                    alt="theme" 
                    className="w-100 rounded-3 shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="col-xl-7 col-lg-6 wow itfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="it-about__right-box ps-lg-4">
                <div className="it-about__section-title pb-25">
                  <span className="it-section-subtitle">KNOW ABOUT US</span>
                  <h4 className="it-section-title mb-3">M.V.M Higher Secondary School</h4>
                </div>

                <div className="it-about__content">
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

                  <p className="mb-3">
                    We are committed to shaping not only successful scholars but responsible citizens who contribute meaningfully to society and the world. 
                    Blending tradition with innovation, MVMRHSS focuses on academic rigor, character formation, and a wide range of co-curricular opportunities 
                    that bring out the best in every student.
                  </p>

                  <p className="mb-4">
                    Rooted in strong moral values and a commitment to excellence, our school provides a dynamic learning atmosphere that shapes students 
                    into confident and responsible individuals.
                  </p>

                  <div className="it-about__btn d-flex align-items-center">
                    <Link className="it-btn hover-2" href="/about-us">
                      <span>discover more</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHomeTwo;
