import Link from 'next/link';
import React from 'react';

const TeamHomeTwo = () => {
  return (
    <>
      <div className="it-team-4__area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-team-4__title-box text-center pb-60">
                <span className="it-section-subtitle-4">
                  Meet Our Managing Committee
                </span>
                <h4 className="it-section-title">School Management</h4>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Each member is col-xl-3 so that 4 per row */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/team/chairman.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>Chairman</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">Abdul Azeez K P</h5> <br />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/team/president.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>President</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">Basheer Pallikkara</h5><br />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/team/vice_president.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>Vice President</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">Mohammadunni Haji</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/team/general_secretary1.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>General Secretary</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">Kunjimohammed Panthavoor</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/team/secretary.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>Secretary</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">N Hameed Kokkur</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/team/secretary_2.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>Secretary</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">Moosakutty V V</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/team/treasurer.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>Treasurer</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">Salih M V</h5>
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

export default TeamHomeTwo;
