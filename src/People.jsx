import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const H1 = styled.h1`
    margin: 0;
`;

const Slink = styled(Link)`
    color: #fff;
    text-decoration: none;
`;

class People extends React.Component {
    state = { people: [], peopleNext: '', peoplePrev: '', };

    fetchPeople = async () => {
        const peopleRes = await fetch(`https://swapi.co/api/people/${this.props.location.search && '?page=' + this.props.location.search[1]}`);
        const peopleData = await peopleRes.json();
        this.setState({
            people: peopleData.results,
            peopleNext: peopleData.next,
            peoplePrev: peopleData.previous
        });
    };

    // fetchFilms = async (msg) => {
    //     const filmRes = await fetch('https://swapi.co/api/films/');
    //     const filmData = await filmRes.json();
    //     this.setState({ films: filmData.results });
    //     // console.log(msg, this.state.films)
    // };

    componentDidMount() {
        console.log("MOUNT PEOPLE")
        this.fetchPeople();
    }

    componentDidUpdate() {
        this.fetchPeople();
    }

    getIdFromUrl(url) {
        const id = url.split('/');
        return Number(id[id.length - 2]);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (this.state.peopleNext !== nextState.peopleNext
            || this.state.peoplePrev !== nextState.peoplePrev);
    }


    render() {
        const { peopleNext: next, peoplePrev: prev } = this.state;

        console.log('RENDERRRR', this.props.films)

        return (
            <>
                <H1>PEOPLE</H1>
                <ul>
                    {this.state.people.map(person => {
                        return (
                            <li key={person.url}>
                                <Slink to={{ pathname: `/people/${this.getIdFromUrl(person.url)}`, state: { people: this.state.people, person, films: this.props.films } }}>
                                    {person.name}
                                </Slink>
                            </li>
                        );
                    })}
                </ul>
                {this.state.peoplePrev && <Slink onClick={() => this.setState({ peoplePrev: '' })} to={`/people?${prev[prev.length - 1]}`}>Previous </Slink>}
                {this.state.peopleNext && <Slink onClick={() => this.setState({ peopleNext: '' })} to={`/people?${next[next.length - 1]}`}> Next</Slink>}
            </>
        );
    }
}

export default People;
