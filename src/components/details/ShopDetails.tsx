
"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const ShopDetails = () => {

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleChange = (event: any) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };


  return (
    <>
      <div className="it-shop-details__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="it-shop-details__thumb-box">
                <img src="assets/img/service/details1-2.jpg" alt="rk-theme" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="it-shop-details__right-wrap">
                <h3 className="it-shop-details__title-sm pb-10">Vaccum Cleaner</h3>
                <div className="it-shop-details__price">
                  <div className="it-shop-details__ratting">
                    <span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z"
                          fill="currentcolor" />
                      </svg>
                    </span>
                    <span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z"
                          fill="currentcolor" />
                      </svg>
                    </span>
                    <span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z"
                          fill="currentcolor" />
                      </svg>
                    </span>
                    <span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z"
                          fill="currentcolor" />
                      </svg>
                    </span>
                    <span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z"
                          fill="currentcolor" />
                      </svg>
                    </span>
                    <span className="review-text">(25 Customer reviews)</span>
                  </div>
                  <span>$19.99</span>
                </div>
                <div className="it-shop-details__text pb-10">
                  <p>In todays online world, a brands success lies in combining <br />
                    technological planning and social strategies to draw <br />
                    customers in-and keep them coming back
                  </p>
                  <span>Size & Fit</span>
                  <p>The model (height 6 inc) is perfect for you</p>
                </div>
                <div className="it-shop-details__quantity-wrap">
                  <div className="it-shop-details__quantity-box d-flex align-items-center">
                    <span>Quantity</span>
                    <div className="it-shop-details__quantity">
                      <div className="cart-minus" onClick={handleDecrement}><i className="fal fa-minus"></i></div> 
                      <input
                        type="text"
                        value={quantity}
                        onChange={handleChange}
                      />
                      <div className="cart-plus" onClick={handleIncrement}><i className="fal fa-plus"></i></div>
                    </div>
                    <div className="it-shop-details__btn">
                      <Link className="it-black-btn hover-2" href="/cart"><span>Add To Cart</span></Link>
                    </div>
                  </div>
                  <div className="it-shop-details__text-2 pb-20">
                    <span><strong>SKU:</strong> 124224</span>
                    <span><strong>Category: </strong>Crux Indoor Fast and Easy</span>
                    <span><strong>Tag: </strong>accessories, business</span>
                  </div>
                  <div className="it-shop-details__social">
                    <span>Share:</span>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="it-shop-details__text-box mt-100 mb-50">
                <h5 className="postbox__details-title">Our Description</h5>
                <p className="pt-10 pb-20">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                <p className="mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga similique sunt in culpa qui officia deserunt</p>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="it-shop-details__review-box mb-25">
                <h4 className="postbox__details-title">Client Reviews</h4>
                <div className="it-shop-details__review pt-10 d-flex align-items-start">
                  <div className="it-shop-details__review-thumb">
                    <img src="assets/img/service/author-1.png" alt="rk-theme" />
                  </div>
                  <div className="it-shop-details__author-info">
                    <span><strong>by David Parker / </strong>March 28, 2022</span>
                    <div className="it-shop-details__star">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p>Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Dictum at tempor commodo ullamcorper. Sed risus pretium
                      quam vulputate dignissim suspendisse. Habitasse platea dictumst quisque </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="it-contact-2__input-box">
                <div className="it-contact-2__text pb-30">
                  <h5 className="it-contact-2__title-sm text-black">Add Your Review</h5>
                </div>
                <div className="it-contact-2__form-box">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-12">
                        <div className="it-contact-2__input">
                          <textarea placeholder="Write Your Message*"></textarea>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                        <div className="it-contact-2__input">
                          <input type="text" placeholder="Your Name*" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                        <div className="it-contact-2__input">
                          <input type="email" placeholder="Email Address*" required />
                        </div>
                      </div>
                    </div>
                    <button type="button" className="it-btn hover-2"><span>SUBMIT</span></button>
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

export default ShopDetails;