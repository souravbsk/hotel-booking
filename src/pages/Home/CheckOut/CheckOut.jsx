import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const CheckOut = () => {
  return (
    <div className="container my-5">
    <div className="row">
      <div className="col">
        <h1 className="mb-4">Checkout</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required/>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required/>
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Credit Card Number</label>
            <input type="text" className="form-control" id="cardNumber" placeholder="Enter your credit card number" required/>
          </div>

          <div className="form-group">
            <label htmlFor="cardName">Name on Card</label>
            <input type="text" className="form-control" id="cardName" placeholder="Enter the name on your credit card" required/>
          </div>

          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="month" className="form-control" id="expiryDate" required/>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="cvc">CVC</label>
                <input type="text" className="form-control" id="cvc" placeholder="Enter the CVC code" required/>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-3">Confirm Booking</button>
        </form>
      </div>
    </div>
  </div>

  );
};

export default CheckOut;
