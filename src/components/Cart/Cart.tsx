"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const Cart = () => {

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

  const [quantity2, setQuantity2] = useState(1);

  const handleIncrement2 = () => {
    setQuantity2(prevQuantity2 => prevQuantity2 + 1);
  };

  const handleDecrement2 = () => {
    setQuantity2(prevQuantity2 => (prevQuantity2 > 1 ? prevQuantity2 - 1 : 1));
  };

  const handleChange2 = (event: any) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity2(value);
    }
  };



  return (
    <>
      <section className="cart-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="table-content table-responsive wow tpfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".3s"
                  style={{ visibility: 'visible', animationDuration: '0.9s', animationDelay: '0.3s', animationName: 'tpfadeUp' }}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-thumbnail"><Link href="/product-details"><img
                          src="assets/img/product/product-1.jpg" alt="rk-theme" /></Link></td>
                        <td className="product-name"><Link href="/product-details">specialone 4 Inch 820W</Link></td>
                        <td className="product-price"><span className="amount">$180.00</span></td>
                        <td className="product-quantity">
                          <span className="cart-minus" onClick={handleDecrement}>-</span>
                          <input
                            type="text"
                            value={quantity}
                            onChange={handleChange}
                          />
                          <span className="cart-plus" onClick={handleIncrement}>+</span>
                        </td>
                        <td className="product-subtotal"><span className="amount">$760.00</span></td>
                        <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail"><Link href="/product-details"><img
                          src="assets/img/product/product-2.jpg" alt="rk-theme" /></Link></td>
                        <td className="product-name"><Link href="/product-details">specialone 4 Inch 820W</Link>
                        </td>
                        <td className="product-price"><span className="amount">$1260.50</span></td>
                        <td className="product-quantity">
                          <span className="cart-minus" onClick={handleDecrement2}>-</span>
                          <input
                            type="text"
                            value={quantity2}
                            onChange={handleChange2}
                          />
                          <span className="cart-plus" onClick={handleIncrement2}>+</span>
                        </td>
                        <td className="product-subtotal"><span className="amount">$90.50</span></td>
                        <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail"><Link href="/product-details"><img
                          src="assets/img/product/product-3.jpg" alt="rk-theme" /></Link></td>
                        <td className="product-name"><Link href="/product-details">specialone 4 Inch 820W</Link></td>
                        <td className="product-price"><span className="amount">$180.00</span></td>
                        <td className="product-quantity">
                          <span className="cart-minus">-</span>
                          <input className="cart-input" type="text" value="1" />
                          <span className="cart-plus">+</span>
                        </td>
                        <td className="product-subtotal"><span className="amount">$760.00</span></td>
                        <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail"><Link href="/product-details"><img
                          src="assets/img/product/product-2.jpg" alt="rk-theme" /></Link></td>
                        <td className="product-name"><Link href="/product-details">specialone 4 Inch 820W</Link>
                        </td>
                        <td className="product-price"><span className="amount">$1260.50</span></td>
                        <td className="product-quantity">
                          <span className="cart-minus">-</span>
                          <input className="cart-input" type="text" value="1" />
                          <span className="cart-plus">+</span>
                        </td>
                        <td className="product-subtotal"><span className="amount">$90.50</span></td>
                        <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="coupon-all">
                      <div className="coupon">
                        <input id="coupon_code" className="input-text" name="coupon_code" value=""
                          placeholder="Coupon code" type="text" />
                        <button className="it-btn hover-2" name="apply_coupon" type="submit"><span>Apply
                          coupon</span></button>
                      </div>
                      <div className="coupon2">
                        <button className="it-btn hover-2" name="update_cart" type="submit"><span>Update cart</span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-md-5 ">
                    <div className="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul className="mb-20">
                        <li>Subtotal <span>$250.00</span></li>
                        <li>Total <span>$250.00</span></li>
                      </ul>
                      <Link className="it-btn hover-2" href="/checkout"><span>Proceed to checkout</span></Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;