import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const P = styled.p`
    margin: 0;
`;

function Film(props) {
    const { title, episode_id: episode, release_date, characters } = props.location.state.film;
    const filmCharacers = props.location.state.people.filter(pers => characters.includes(pers.url))

    const getIdFromUrl = url => {
        const id = url.split('/');
        return Number(id[id.length - 2]);
    }

    return (
        <>
            <P>{title}</P>
            <P>Episode {episode}</P>
            <P>Released: {release_date}</P>
            <ul>Characters:
                {filmCharacers.map(char => <li key={char.name}> <Link
                to={{
                    pathname: `/people/${getIdFromUrl(char.url)}`,
                    state: {
                        people: props.location.state.people,
                        person: char,
                        films: props.location.state.films
                    }
                }}>{char.name}</Link> </li>)}
            </ul>
        </>
    )
}

export default Film;
