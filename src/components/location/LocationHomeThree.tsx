

import React from 'react';

const LocationHomeThree = () => {
  return (
    <>
      <div className="it-location__area">
        <div className="it-location__item">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100122.52831467663!2d38.12006981094655!3d38.35293949235523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1sen!2sbd!4v1687792834725!5m2!1sen!2sbd"
            width="600" height="450" style={{ border: "0" }} allowFullScreen={true} loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </>
  );
};

export default LocationHomeThree;