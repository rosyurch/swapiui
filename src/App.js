import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import People from './People';
import Home from './Home';
import Person from './Person';
import Film from './Film';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Div = styled.div`
    text-align: center;
    background-color: #282c34;
    width: 100vw;
    height: 100vh;
    color: #fff;
    margin: 0;
`;

function App() {
    const [films, setFilms] = useState([]);

    const fetchFilms = async () => {
        const filmRes = await fetch('https://swapi.co/api/films/');
        const filmData = await filmRes.json();
        // console.log(filmData);
        setFilms(filmData.results);
    };

    useEffect(() => {
        fetchFilms();
    }, []);

    return (
        <Router>
            <Div className="App">
                <Route exact path="/" component={Home} />
                <Route exact path="/people" render={match => <People {...match} films={films} />} />
                <Route exact path="/people/:id" component={Person} />
                {/* <Route exact path="/films/" /> */}
                <Route exact path="/film/:id" component={Film} />
                <Route exact path="people?:page" render={match => <People {...match} films={films} />} />
            </Div>
        </Router>
    );
}

export default App;
