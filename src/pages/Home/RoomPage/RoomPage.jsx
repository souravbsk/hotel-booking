import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Room from "../Room/Room";

const RoomPage = () => {
    const rooms = useLoaderData();
  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-3">All Rooms</h2>
      <Row xs={1} md={3} className="g-4">
        {rooms.map((room) => (
          <Room key={room.Id} room={room}></Room>
        ))}
      </Row>
    </div>
  );
};

export default RoomPage;
