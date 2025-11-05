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

          {/* === Principal & Vice Principal Section === */}
          <div className="row justify-content-center mb-60">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-30">
              <div className="it-team-4__item text-center">
                <div className="it-team-4__thumb fix p-relative">
                  <img
                     src="assets/img/management/rasheed-karinkappara-principal.jpg"
                       style={{border: "1px solid #56525283", padding: "4px",        }}
                  />
                </div>
                <div className="it-team-4__content-wrap" style={{ marginTop: "20px" }}>

                  <div className="it-team-4__author-info">
                    <span>Principal</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">
                         Rasheed Karinkappara
                      </h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-30">
              <div className="it-team-4__item text-center">
                <div className="it-team-4__thumb fix p-relative">
                  <img
                       src="assets/img/management/alikutty-tm-vice-principal.jpg"
                    alt="Vice Principal"
                      style={{border: "1px solid #56525283", padding: "4px",        }}
                  />
                </div>
                <div className="it-team-4__content-wrap" style={{ marginTop: "20px" }}>

                  <div className="it-team-4__author-info">
                    <span>Vice Principal</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">
                          Alikutty T M
                      </h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* === End Principal Section === */}

          {/* === Existing Committee Members === */}
          <div className="row">
            {/* Other Management Members */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                 <img src="assets/img/management/abdul-azeez-k-p-assabah-trust-chairman.jpg" alt="Chairman"
                 style={{border: "1px solid #56525283", padding: "4px",        }}/>
                </div>
                <div className="it-team-4__content-wrap" style={{ marginTop: "20px" }}>

                  <div className="it-team-4__author-info">
                    <span>Chairman</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">Abdul Azeez K P</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/management/abdul-rasheed-k-m-joint-secretary.jpg" alt="Joint Secretary"
                    style={{border: "1px solid #56525283", padding: "4px",        }} />
                </div>
                <div className="it-team-4__content-wrap" style={{ marginTop: "20px" }}>

                  <div className="it-team-4__author-info">
                    <span>Joint Secretary</span>
                    <Link href="/team-details">
                      <h5 className="it-team-4__author-name color">Abdul Rasheed K M</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-4__item">
                <div className="it-team-4__thumb fix p-relative">
                  <img src="assets/img/management/k-kunji-muhammed-general-secretary.jpg" alt="General Secretary" 
                    style={{border: "1px solid #56525283", padding: "4px",        }}/>
                </div>
                <div className="it-team-4__content-wrap" style={{ marginTop: "20px" }}>

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
                  <img src="assets/img/management/k-v-beeravu-treasurer.jpg" alt="Treasurer"
                    style={{border: "1px solid #56525283", padding: "4px",        }} />
                </div>
                <div className="it-team-4__content-wrap" style={{ marginTop: "20px" }}>

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
                  <img src="assets/img/management/kv-hassan-master.jpg" alt="Member" 
                    style={{border: "1px solid #56525283", padding: "4px",        }}/>
                </div>
                <div className="it-team-4__content-wrap" style={{ marginTop: "20px" }}>

                  <div className="it-team-4__author-info">
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
                  <img src="assets/img/management/mujeeb-rahman-general-secretary.jpg" alt="General Secretary" 
                    style={{border: "1px solid #56525283", padding: "4px",        }}/>
                </div>
                <div className="it-team-4__content-wrap" style={{ marginTop: "20px" }}>

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
                  <img src="assets/img/management/n-hameed-vice-president.jpg" alt="Vice President" 
                    style={{border: "1px solid #56525283", padding: "4px",        }}/>
                </div>
                <div className="it-team-4__content-wrap" style={{ marginTop: "20px" }}>

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
                  <img src="assets/img/management/sainu-nechikkal-joint-secretary.jpg" alt="Joint Secretary"
                    style={{border: "1px solid #56525283", padding: "4px",        }} />
                </div>
                <div className="it-team-4__content-wrap" style={{ marginTop: "20px" }}>

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
          {/* === End Grid Section === */}
        </div>
      </div>
    </>
  );
};

export default TeamHomeTwo;
