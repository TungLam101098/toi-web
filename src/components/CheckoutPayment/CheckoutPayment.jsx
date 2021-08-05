import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Shipping } from "./mock-data";

import Visa from "../../assets/img/payment/Visa.png";
import Master from "../../assets/img/payment/Master.png";
import Paypal from "../../assets/img/payment/Paypal.png";
import bottomArrow from "../../assets/img/icon/Bottom-Arrow.svg";
import "./CheckoutPayment.scss";

import { listBagIconic } from '../Cart/mock-data';

function CheckoutPayment() {
  return (
    <>
      <Container style={{ marginBottom: '10rem' }}>
        <Row>
          <Col sm={12} md={7}>
            <form className="shipping-content">
              <h3 className="font-title title">Delivery Method</h3>
              <ul>
                {Shipping.map((shipping, index) => (
                  <li key={index}>
                    <div className="shipping-item">
                      <input type="radio" checked name="shipping" />
                      <div className="shipping-type">
                        <label className="shipping-title">
                          {shipping.title}
                        </label>
                        <br />
                        <span className="shipping-sub-title">
                          {shipping.subtitle}
                        </span>
                      </div>
                    </div>
                    {shipping.cost && (
                      <span className="shipping-cost">${shipping.cost}</span>
                    )}
                  </li>
                ))}
              </ul>
              <h3 className="font-title title">Payment Method</h3>
              <div className="payment-items d-flex">
                <div className="payment-item active">
                  <img src={Visa} alt="img" />
                </div>
                <div className="payment-item ml-1">
                  <img src={Master} alt="img" />
                </div>
                <div className="payment-item ml-1">
                  <img src={Paypal} alt="img" />
                </div>
              </div>
              <div className="field-container">
                <label
                  className="ca-label text-uppercase size-16 color-nero text-left w-100"
                  htmlFor="ca-email"
                >
                  Card number
                </label>
                <input
                  type="tel"
                  className="ca-input size-16 w-100"
                  inputmode="numeric"
                  pattern="[0-9\s]{13,19}"
                  autocomplete="cc-number"
                  maxlength="19"
                  placeholder="xxxx xxxx xxxx xxxx"
                />
                <div className="field-container position-relative">
                  <label
                    className="ca-label text-uppercase size-16 color-nero text-left w-100"
                    htmlFor="ca-month"
                  >
                    Expiration date
                  </label>
                  <select
                    style={{ width: "48%" }}
                    className="ca-input size-16"
                    placeholder="Month"
                  >
                    <option value="" disabled defaultValue>
                      Month
                    </option>
                    <option className="color-nero">January</option>
                    <option className="color-nero">February</option>
                    <option className="color-nero">March</option>
                  </select>
                  <img
                    src={bottomArrow}
                    alt=""
                    style={{ right: "52%" }}
                    className="position-absolute"
                  />
                  <select
                    style={{ width: "48%", marginLeft: "10px" }}
                    className="ca-input size-16"
                    placeholder="Year"
                  >
                    <option value="" disabled defaultValue>
                      Year
                    </option>
                    <option className="color-nero">2020</option>
                    <option className="color-nero">2021</option>
                    <option className="color-nero">2022</option>
                  </select>
                  <img
                    src={bottomArrow}
                    alt=""
                    style={{ right: "0" }}
                    className="position-absolute"
                  />
                  <label
                    className="ca-label text-uppercase size-16 color-nero text-left w-100"
                    htmlFor="ca-email"
                  >
                    Cvv
                  </label>
                  <input
                  style={{ width: "48%" }}
                    type="text"
                    className="ca-input size-16"
                    placeholder="CVV (3 or 4 digit code)"
                  />
                </div>
              </div>
            </form>
          </Col>
          <Col sm={12} md={5}>
            <div className="payment-right">
              <ul>
                {
                  listBagIconic.map(bag => (
                    <li key={bag.id}>
                      <div className='d-flex'>
                        <div className="item-img">
                          <img src={bag.img} alt="" />
                        </div>
                        <div className="item-content">
                          <h4 className="font-title title">{bag.title}</h4>
                          <span className="item-cost">{bag.cost}</span>
                          <br />
                          <span className="item-cost-detail">({bag.quantity} x {bag.cost})</span>
                        </div>
                      </div>
                    </li>
                  ))
                }
                
              </ul>
              <div className="d-flex price py-2">
                <span className= "text-uppercase">Subtotal</span>
                <span className="item-subtotal">$3,000.00</span>
              </div>
              <div className="d-flex price">
                <span className= "text-uppercase">Shipping fee</span>
                <span className="item-subtotal">$3.00</span>
              </div>
              <hr />
              <div className="d-flex price">
                <span className= "text-uppercase">Total</span>
                <span className="item-subtotal">$3,003.00</span>
              </div>
            </div>
            <button className="ca-btn text-white text-uppercase">confirm & check out</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CheckoutPayment;
