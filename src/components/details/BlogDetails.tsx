"use client"

import Link from 'next/link';
import React from 'react';

const BlogDetails = () => {
  return (
    <>
      <div className="postbox__area pt-100 pb-20">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__details-wrapper">
                <article>
                  <div
                    className="postbox__details-title-box pb-40 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".7s"
                  >
                    <h4 className="postbox__details-title mb-20">ACTIVITIES</h4>
                    <p>
                      Admissions are granted in classes VI, VII, VIII &amp; IX through an all
                      India level entrance examination. Admission to class XI is based on
                      the availability of seats. The selection criteria include class 10
                      Board Examination result and performance in the school&apos;s internal
                      admission procedure. The applicant should not have completed
                      eleven/twelve/thirteen/fourteen/sixteen years on 1st January of the
                      year in which admission is sought for these classes. The boys are
                      not permitted to remain in the School after completion of their 18th
                      year, nor after failure in any class for two consecutive years. The
                      boys are also not permitted to remain in the School on failing a
                      public examination class.
                    </p>
                  </div>
                </article>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div
                className="postbox__thumb mb-20 w-img wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <img
                  src="/assets/img/facilities/activitiesimg.jpg"
                  alt="rk-theme"
                  className="w-100 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
