

import Link from 'next/link';
import React from 'react';

const ProjectHomeTwo = () => {
  return (
    <>
      <div className="it-project-4__area fix p-relative pb-120 pt-115">
        <div className="it-project-4__shape d-none d-xl-block">
          <img src="assets/img/project/shape-4-1.png" alt="rk-theme" />
        </div>
        <div className="it-project-4__plr">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-project-4__section-box text-center">
                  <span className="it-section-subtitle-4"><em>{"//"}</em> OUR SHOWCASE</span>
                  <h4 className="it-section-title">Check Our Latest Projects</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".3s">
                <div className="it-project-4__item">
                  <img src="assets/img/project/project-4-1.jpg" alt="rk-theme" />
                  <div className="it-project-4__text text-center">
                    <Link href="/facilities"><i
                      className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    <span>IDEA</span>
                    <h6>Digital Solution</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".5s">
                <div className="it-project-4__item">
                  <img src="assets/img/project/project-4-2.jpg" alt="rk-theme" />
                  <div className="it-project-4__text text-center">
                    <Link href="/facilities"><i
                      className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    <span>IDEA</span>
                    <h6>Digital Solution</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".7s">
                <div className="it-project-4__item">
                  <img src="assets/img/project/project-4-3.jpg" alt="rk-theme" />
                  <div className="it-project-4__text text-center">
                    <Link href="/facilities"><i
                      className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    <span>IDEA</span>
                    <h6>Digital Solution</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".9s">
                <div className="it-project-4__item">
                  <img src="assets/img/project/project-4-4.jpg" alt="rk-theme" />
                  <div className="it-project-4__text text-center">
                    <Link href="/facilities"><i
                      className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    <span>IDEA</span>
                    <h6>Digital Solution</h6>
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

export default ProjectHomeTwo;