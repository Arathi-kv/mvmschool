"use client";
import React, { useEffect } from "react";

const FaqHomeTwo = () => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			require("bootstrap/dist/js/bootstrap");
		}
	}, []);

	return (
		<>
			<div className="it-faq-4__area  grey-bg-2 p-relative pt-120 pb-90">
				<div className="it-faq-4__bg d-none d-xxl-block">
					<img src="assets/img/faq/bg-4-1.jpg" alt="rk-theme" />
				</div>
				<div className="it-faq-4__shape">
					<img src="assets/img/faq/shape-4-1.png" alt="rk-theme" />
				</div>
				<div className="container">
					<div className="row">
						<div
							className="col-xl-6 col-lg-6 mb-30 wow itfadeLeft"
							data-wow-duration=".9s"
							data-wow-delay=".5s"
						>
							<div className="it-faq-4__left-box p-relative z-index-3">
								<div className="it-faq-4__title-box pb-50">
									<span className="it-section-subtitle-4">
										{/* <em>//</em>  */}
										FREQUENTLY ASKED QUESTION
									</span>
									<h4 className="it-section-title">
										What Our Clients Ask About Tecch
									</h4>
								</div>
								<div className="it-faq-4__wrapper-box">
									<div className="it-custom-accordion-2">
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
														Your applicant may have limited help desk
														wexperience. In that case, look for applicants who
														are motivated to grow and have some transferable
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
														Your applicant may have limited help desk
														wexperience. In that case, look for applicants who
														are motivated to grow and have some transferable
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
														Your applicant may have limited help desk
														wexperience. In that case, look for applicants who
														are motivated to grow and have some transferable
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
														Your applicant may have limited help desk
														wexperience. In that case, look for applicants who
														are motivated to grow and have some transferable
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 mb-30">
							<div className="it-contact-2__left-box it-contact-2__red-border p-relative z-index-3">
								<div className="it-contact-2__text pb-30">
									<span className="it-section-subtitle-4">
										{/* <em>//</em>  */}
										Contact With Us
									</span>
									<h5 className="it-contact-2__title-sm text-black">
										Have Any Question?
									</h5>
								</div>
								<div className="it-contact-2__form-box">
									<form onSubmit={(e) => e.preventDefault()}>
										<div className="row">
											<div className="col-12">
												<div className="it-contact-2__input">
													<input type="text" placeholder="Your Name" />
												</div>
											</div>
											<div className="col-12">
												<div className="it-contact-2__input">
													<input
														type="email"
														placeholder="Email Address"
														required
													/>
												</div>
											</div>
											<div className="col-12">
												<div className="it-contact-2__input">
													<input type="email" placeholder="Phone Number" />
												</div>
											</div>
											<div className="col-12">
												<div className="it-contact-2__input">
													<textarea placeholder="Write Your Message"></textarea>
												</div>
											</div>
										</div>
										<button type="submit" className="it-red-btn hover-2">
											<span>Send Your Message</span>
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FaqHomeTwo;
