import Link from "next/link";
import React from "react";

const ServiceDetails = () => {
	return (
		<>
			<div className="it-service-details__area pt-120 pb-70">
				<div className="container">
					<div className="row">
						<div className="col-xl-4 col-lg-4 mb-50">
							<div className="sidebar__wrapper-box">
								<div
									className="sidebar__widget border-color-2 border-color mb-40 wow tpfadeUp"
									data-wow-duration=".9s"
									data-wow-delay=".7s"
								>
									<div className="sidebar__widge-title-box">
										<h3 className="sidebar__widget-title">Categories</h3>
									</div>
									<div className="sidebar__widget-content">
										<ul>
											<li>
												<a href="#">Cloud Service</a>
											</li>
											<li>
												<a href="#">Web Development</a>
											</li>
											<li>
												<a href="#">Ui/Ux Designing</a>
											</li>
											<li>
												<a href="#">IT Management</a>
											</li>
											<li>
												<a href="#">Data Visualization</a>
											</li>
											<li>
												<a href="#">Security System</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="sidebar__widget mb-40">
									<div className="it-service-details__thumb-box  d-flex justify-content-center align-items-center fox p-relative">
										<div className="it-service-details__thumb-content z-index text-center">
											<h5 className="it-service-details__title mb-40">
												Need Any Types <br />
												of Service <br />
												from us
											</h5>
											<Link className="it-black-btn z-index" href="/contact">
												<span>FIND SOLUTION</span>
											</Link>
										</div>
									</div>
								</div>
								<div className="sidebar__widget border-color-2 border-color">
									<div className="it-service-details__contact d-flex align-items-center">
										<div className="it-service-details__icon-2">
											<span>
												<i className="flaticon-phone-call"></i>
											</span>
										</div>
										<div className="it-service-details__text">
											<span>You can call anytime </span>
											<a href="tel:+997868765">
												<h6>Free +99 (786) 8765</h6>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-8 col-lg-8 mb-50">
							<div className="it-service-details__wrap">
								<div className="it-service-details__content-box">
									<h5 className="postbox__details-title">
										World best web <br /> design service provider.
									</h5>
									<p className="pb-15">
										We embrace holistic development and support for employees
										with the aim of being a first-choice employer within our
										sectors. Through a unique combination of engineering,
										construction and design disciplines and expertise.
									</p>
									<div className="it-service-details__thumb pb-30">
										<img
											src="assets/img/service/details1-1.jpg"
											alt="rk-theme"
										/>
									</div>
									<h5 className="it-service-details__title">Cloud Service</h5>
									<p className="pb-20">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Maecenas varius tortor nibh, sit amet tempor nibh finibus
										et. Aenean eu enim justo. Vestibulum aliquam hendrerit
										molestie. Mauris malesuada nisi sit amet augue accumsan
										tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar,
										tortor eros facilisis libero, vitae commodo nunc quam et
										ligula
									</p>
									<div className="row">
										<div className="col-xl-5 col-lg-5">
											<div className="it-service-details__left-box">
												<h5 className="it-service-details__title">Our Goals</h5>
												<div className="it-service-details__list">
													<ul>
														<li>
															<i className="flaticon-check-mark"></i>Aliquam
															accumsan et ante id
														</li>
														<li>
															<i className="flaticon-check-mark"></i>Lorem ipsum
															dolor sit dgdr
														</li>
														<li>
															<i className="flaticon-check-mark"></i>Maecenas
															varius tortor
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-xl-7 col-lg-7">
											<div className="it-service-details__right-box">
												<h5 className="it-service-details__title">
													The Challenges
												</h5>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit. Maecenas varius tortor nibh, sit amet tempor
													finibus et. Aenean eu enim justo. Vestibulum
												</p>
											</div>
										</div>
										<div className="it-service-details__box mb-20">
											<div className="row">
												<div className="col-xl-6 mb-30">
													<div className="it-service-details__item d-flex align-items-center">
														<div className="it-service-details__icon">
															<span>
																<i className="flaticon-medal"></i>
															</span>
														</div>
														<div className="it-service-details__text">
															<h5>Why IT Solution?</h5>
															<p>We always try to give best services</p>
														</div>
													</div>
												</div>
												<div className="col-xl-6 mb-30">
													<div className="it-service-details__item d-flex align-items-center">
														<div className="it-service-details__icon">
															<span className="color">
																<i className="flaticon-design"></i>
															</span>
														</div>
														<div className="it-service-details__text">
															<h5>Best Solution</h5>
															<p>We always try to give best services</p>
														</div>
													</div>
												</div>
											</div>
										</div>
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
																Your applicant may have limited help desk
																wexperience. In that case, look for applicants
																who are motivated to grow and have some
																transferable
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
																wexperience. In that case, look for applicants
																who are motivated to grow and have some
																transferable
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
																wexperience. In that case, look for applicants
																who are motivated to grow and have some
																transferable
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
																wexperience. In that case, look for applicants
																who are motivated to grow and have some
																transferable
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
					</div>
				</div>
			</div>
		</>
	);
};

export default ServiceDetails;
