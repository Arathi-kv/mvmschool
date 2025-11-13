import React from "react";

const members = [
  "V Muhammedunni Haji",
  "P.P.M Asharaf",
  "K Hameed Master",
  "M.V Basheer",
  "Moosakutty V.V",
  "Hakeem K.T",
  "C.V Hussain",
  "Fadih K.B",
  "Akbar K.V",
  "K.V Hamza",
  "Hamza P.V",
  "Mammu K.V",
  "Abdul Kader M.K",
  "Muhammadali O.P",
  "Mujeeb Kokkūr",
  "Shafeeq E.M",
  "Moidu V.M",
  "Ali P.B",
  "Yasir Ansari P.K",
];

const MembersList = () => {
  return (
    <div className="it-team-4__area pt-12 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center">
            <div className="it-team-4__title-box pb-60">
              <span className="it-section-subtitle-4">Meet Our Members</span>
              <h4 className="it-section-title">Managing Committee Members</h4>
            </div>
          </div>
        </div>

        {/* ✅ Removed justify-content-center to align grid left */}
        <div className="row">
          {members.map((name, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-20"
            >
              <div
                className="text-center p-3"
                style={{
                  border: "1px solid #d0d0d0",
                  borderRadius: "8px",
                  background: "#fafafa",
                  transition: "all 0.3s ease",
                }}
              >
                <h5
                  className="it-team-4__author-name color"
                  style={{ margin: 0, fontSize: "1rem" }}
                >
                  {name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersList;
