"use client";
import React, { useEffect } from "react";

const FaqArea = () => {

	useEffect(() => {
		if (typeof window !== "undefined") {
			require("bootstrap/dist/js/bootstrap");
		}
	}, []);




	return (
		<>
			<div className="faq__area pt-120 pb-70">
				<div className="container">
					<div className="row">
						<div
							className="col-xl-6 col-lg-6 mb-50 wow itfadeLeft"
							data-wow-duration=".9s"
							data-wow-delay=".4s"
						>
							<div className="it-faq__wrapper-box">
								<div className="it-custom-accordion">
									<div className="accordion" id="accordionExample">
										<div className="accordion-items">
											<h2 className="accordion-header" id="headingOne">
												<button
													className="accordion-buttons "
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseOne"
													aria-expanded="true"
													aria-controls="collapseOne"
												>
													I am a total beginner. Can I still follow along?
												</button>
											</h2>
											<div
												id="collapseOne"
												className="accordion-collapse collapse show"
												aria-labelledby="headingOne"
												data-bs-parent="#accordionExample"
											>
												<div className="accordion-body">
													Your applicant may have limited help desk wexperience.
													In that case, look for applicants who are motivated to
													grow and have some transferable
												</div>
											</div>
										</div>
										<div className="accordion-items">
											<h2 className="accordion-header" id="headingTwo">
												<button
													className="accordion-buttons collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseTwo"
													aria-expanded="false"
													aria-controls="collapseTwo"
												>
													Which technical skills would you improve?
												</button>
											</h2>
											<div
												id="collapseTwo"
												className="accordion-collapse collapse"
												aria-labelledby="headingTwo"
												data-bs-parent="#accordionExample"
											>
												<div className="accordion-body">
													Your applicant may have limited help desk wexperience.
													In that case, look for applicants who are motivated to
													grow and have some transferable
												</div>
											</div>
										</div>
										<div className="accordion-items">
											<h2 className="accordion-header" id="headingThree">
												<button
													className="accordion-buttons collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseThree"
													aria-expanded="false"
													aria-controls="collapseThree"
												>
													What do Logical Drives do?
												</button>
											</h2>
											<div
												id="collapseThree"
												className="accordion-collapse collapse"
												aria-labelledby="headingThree"
												data-bs-parent="#accordionExample"
											>
												<div className="accordion-body">
													Your applicant may have limited help desk wexperience.
													In that case, look for applicants who are motivated to
													grow and have some transferable
												</div>
											</div>
										</div>
										<div className="accordion-items">
											<h2 className="accordion-header" id="headingFour">
												<button
													className="accordion-buttons collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseFour"
													aria-expanded="false"
													aria-controls="collapseFour"
												>
													What about our safety measures ?
												</button>
											</h2>
											<div
												id="collapseFour"
												className="accordion-collapse collapse"
												aria-labelledby="headingFour"
												data-bs-parent="#accordionExample"
											>
												<div className="accordion-body">
													Your applicant may have limited help desk wexperience.
													In that case, look for applicants who are motivated to
													grow and have some transferable
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className="col-xl-6 col-lg-6 mb-50 wow itfadeRight"
							data-wow-duration=".9s"
							data-wow-delay=".7s"
						>
							<div className="it-faq__wrapper-box">
								<div className="it-custom-accordion">
									<div className="accordions" id="accordionExample2">
										<div className="accordion-items">
											<h2 className="accordion-header" id="headingOne1">
												<button
													className="accordion-buttons"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseOne1"
													aria-expanded="true"
													aria-controls="collapseOne1"
												>
													What do Logical Drives do?
												</button>
											</h2>
											<div
												id="collapseOne1"
												className="accordion-collapse collapse show"
												aria-labelledby="headingOne1"
												data-bs-parent="#accordionExample2"
											>
												<div className="accordion-body">
													Your applicant may have limited help desk wexperience.
													In that case, look for applicants who are motivated to
													grow and have some transferable
												</div>
											</div>
										</div>
										<div className="accordion-items">
											<h2 className="accordion-header" id="headingTwo2">
												<button
													className="accordion-buttons collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseTwo2"
													aria-expanded="false"
													aria-controls="collapseTwo2"
												>
													Which technical skills would you improve?
												</button>
											</h2>
											<div
												id="collapseTwo2"
												className="accordion-collapse collapse"
												aria-labelledby="headingTwo2"
												data-bs-parent="#accordionExample2"
											>
												<div className="accordion-body">
													Your applicant may have limited help desk wexperience.
													In that case, look for applicants who are motivated to
													grow and have some transferable
												</div>
											</div>
										</div>
										<div className="accordion-items">
											<h2 className="accordion-header" id="headingThree3">
												<button
													className="accordion-buttons collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseThree3"
													aria-expanded="false"
													aria-controls="collapseThree3"
												>
													What about our safety measures ?
												</button>
											</h2>
											<div
												id="collapseThree3"
												className="accordion-collapse collapse"
												aria-labelledby="headingThree3"
												data-bs-parent="#accordionExample2"
											>
												<div className="accordion-body">
													Your applicant may have limited help desk wexperience.
													In that case, look for applicants who are motivated to
													grow and have some transferable
												</div>
											</div>
										</div>
										<div className="accordion-items">
											<h2 className="accordion-header" id="headingFour4">
												<button
													className="accordion-buttons collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseFour4"
													aria-expanded="false"
													aria-controls="collapseFour4"
												>
													I am a total beginner. Can I still follow along?
												</button>
											</h2>
											<div
												id="collapseFour4"
												className="accordion-collapse collapse"
												aria-labelledby="headingFour4"
												data-bs-parent="#accordionExample2"
											>
												<div className="accordion-body">
													Your applicant may have limited help desk wexperience.
													In that case, look for applicants who are motivated to
													grow and have some transferable
												</div>
											</div>
										</div>
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

export default FaqArea;
