import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FeatureRoom from '../FeatureRoom/FeatureRoom';
import Banner from '../Banner/Banner';

const Home = () => {
    const rooms = useLoaderData();
    console.log(rooms);
    return (
        <div>
            <Banner></Banner>
            <FeatureRoom rooms={rooms}></FeatureRoom>
        </div>
    );
};

export default Home;