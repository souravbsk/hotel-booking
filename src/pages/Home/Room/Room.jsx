import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { FaBed, FaUserFriends, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const Room = ({ room }) => {
  const { Id, roomTitle, price, pic, paragraph, category, person, bed } = room;
  return (
    <>
      <Col>
        <Card>
          <Card.Title className="py-3 px-2">
            {" "}
            <span className="bg-danger bg-opacity-75 text-white px-2 rounded-circle">
              {roomTitle.slice(0, 1)}
            </span>{" "}
            {roomTitle}
          </Card.Title>
          <Card.Img variant="top" className="rounded-0" src={pic} />
          <Card.Body>
            <Card.Text>{paragraph.slice(0, 100)}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-secondary fw-semibold mb-0 fs-6">
                <FaBed></FaBed> : {bed}{" "}
              </p>
              <p className="text-secondary fw-semibold mb-0 fs-6">
                <FaUserFriends></FaUserFriends> : {person}
              </p>
              <p className="text-secondary fw-semibold mb-0 fs-6">
                <FaDollarSign></FaDollarSign> : {price}
              </p>
              <Link to="/checkout">
                <Button variant="primary">Book</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Room;
