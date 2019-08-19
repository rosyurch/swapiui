import React from 'react';
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
    return (
        <Router>

            <Div className="App">

                <Route exact path="/" component={Home} />
                <Route exact path="/people" component={People} />
                <Route exact path="/people/:id" component={Person} />
                {/* <Route exact path="/films/" /> */}
                <Route exact path="/film/:id" component={Film} />
            </Div>

        </Router>
    );
}

export default App;
