import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>Nion</div>
            <Link to="/about">link</Link>
        </div>
    );
};

export default Home;