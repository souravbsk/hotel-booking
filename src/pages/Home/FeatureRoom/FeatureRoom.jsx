import React from 'react';
import Room from '../Room/Room';
import { Row } from 'react-bootstrap';

const FeatureRoom = ({rooms}) => {
    
    return (
        <div className='container'>
            <h2 className='text-center mt-5 mb-3'>All Rooms</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    rooms.map(room => <Room key={room.Id} room={room}></Room>)
                }
            </Row>
        </div>
    );
};

export default FeatureRoom;