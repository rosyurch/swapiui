import React from 'react';
import { Link } from 'react-router-dom';

const style = { color: '#fff' };

function Home(props) {
    return (
        <>
            <Link to="/" style={style}>
                Home
            </Link>
            <Link to="/people" style={style}>
                People
            </Link>
        </>
    );
}

export default Home;
