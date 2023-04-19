import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const CheckOut = () => {
  return (
    <div class="container my-5">
    <div class="row">
      <div class="col">
        <h1 class="mb-4">Checkout</h1>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name" required/>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email" required/>
          </div>

          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="tel" class="form-control" id="phone" placeholder="Enter your phone number" required/>
          </div>

          <div class="form-group">
            <label for="cardNumber">Credit Card Number</label>
            <input type="text" class="form-control" id="cardNumber" placeholder="Enter your credit card number" required/>
          </div>

          <div class="form-group">
            <label for="cardName">Name on Card</label>
            <input type="text" class="form-control" id="cardName" placeholder="Enter the name on your credit card" required/>
          </div>

          <div class="form-row">
            <div class="col">
              <div class="form-group">
                <label for="expiryDate">Expiry Date</label>
                <input type="month" class="form-control" id="expiryDate" required/>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="cvc">CVC</label>
                <input type="text" class="form-control" id="cvc" placeholder="Enter the CVC code" required/>
              </div>
            </div>
          </div>

          <button type="submit" class="btn btn-primary mt-3">Confirm Booking</button>
        </form>
      </div>
    </div>
  </div>

  );
};

export default CheckOut;
