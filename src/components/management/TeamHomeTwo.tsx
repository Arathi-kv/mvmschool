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
                  <img src="assets/img/management/abdul-azeez-k-p-assabah-trust-chairman.jpg" alt="rk-theme" />
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
                  <img src="assets/img/management/abdul-rasheed-k-m-joint-secretary.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>Joint Secretary</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">Abdul Rasheed K M</h5><br />
                    </Link>
                  </div>
                </div>
              </div>
            </div>


             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/management/k-kunji-muhammed-general-secretary.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>General Secretary</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">K Kunji Muhammed</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/management/k-v-beeravu-treasurer.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>Treasurer</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">K V Beeravu</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/management/kv-hassan-master.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>  </span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">K V Hassan Master</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/management/mujeeb-rahman-general-secretary.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>General Secretary</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">Mujeeb Rahman</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/management/n-hameed-vice-president.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>Vice President</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">N Hameed</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/management/sainu-nechikkal-joint-secretary.jpg" alt="rk-theme" />
                </div>
                <div className="it-team-4__content-wrap">
                  <div className="it-team-4__author-info">
                    <span>Joint Secretary</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">Sainu Nechikkal</h5>
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
