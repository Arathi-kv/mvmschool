import React from "react";

const Administration = () => {
  return (
    <div className="it-blog-4__area pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center">
            <div className="it-blog-4__section-title">
              <span className="it-section-subtitle-4">Our Leaders</span>
              <h4 className="it-section-title">Administration</h4>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Principal */}
          <div
            className="col-xl-5 col-lg-5 col-md-6 mb-30 wow itfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="it-blog-4__item text-center">
              <div className="it-blog-4__thumb-box p-relative">
                <div className="it-blog-4__thumb p-relative">
                  <img
                    className="w-100 rounded-3"
                    src="assets/img/management/rasheed-karinkappara-principal.jpg"
                    alt="Principal"
                  />
                </div>
              </div>
              <div className="it-blog-4__content">
                <h4 className="it-blog-4__title">Mr.Rasheed Karinkappara</h4>
                <p className="text-muted mb-2">Principal</p>
                <p>
                  Our Principal leads the institution with dedication and a vision
                  for holistic education. He emphasizes excellence, discipline, and
                  compassion in every aspect of school life.
                </p>
              </div>
            </div>
          </div>

          {/* Vice Principal */}
          <div
            className="col-xl-5 col-lg-5 col-md-6 mb-30 wow itfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-blog-4__item text-center">
              <div className="it-blog-4__thumb-box p-relative">
                <div className="it-blog-4__thumb p-relative">
                  <img
                    className="w-100 rounded-3"
                    src="assets/img/management/alikutty-tm-vice-principal.jpg"
                    alt="Vice Principal"
                  />
                </div>
              </div>
              <div className="it-blog-4__content">
                <h4 className="it-blog-4__title">Mr.Alikutty T M</h4>
                <p className="text-muted mb-2">Vice Principal</p>
                <p>
                  The Vice Principal supports the school’s vision through innovative
                  teaching strategies and student-focused administration, ensuring
                  smooth day-to-day academic functioning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Administration;
