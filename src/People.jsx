import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const H1 = styled.h1`
    margin: 0;
`;

const Slink = styled(Link)`
    color:#fff;
`

class People extends React.Component {
    state = { people: [], films: [] };

    fetchResources = async () => {
        const peopleRes = await fetch('https://swapi.co/api/people/');
        const filmRes = await fetch('https://swapi.co/api/films/');

        const peopleData = await peopleRes.json();
        const filmData = await filmRes.json();
        this.setState({ people: peopleData.results, films: filmData.results });
    };

    componentDidMount() {
        this.fetchResources();
    }

    getIdFromUrl(url) {
        const id = url.split('/');
        return Number(id[id.length - 2]);
    }

    render() {
        return (
            <>
                <H1>PEOPLE</H1>
                <ul>
                    {this.state.people.map(person => {
                        return (
                            <li key={person.url}>
                                <Slink to={{ pathname: `/people/${this.getIdFromUrl(person.url)}`, state: { person, films: this.state.films } }}>{person.name}</Slink>
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default People;
