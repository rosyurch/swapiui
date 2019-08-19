import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const P = styled.p`
    margin: 0;
`;

function Person(props) {
    const { name, birth_year, films, vehicles, starships } = props.location.state.person;
    const movies = props.location.state.films.filter(film => {
        return films.includes(film.url);
    });
    const getIdFromUrl = url => {
        const urlArr = url.split('/');
        urlArr.pop()
        return Number(urlArr.pop());
    };

    return (
        <>
            <P>Name: {name}</P>
            <P>Birth year: {birth_year}</P>
            <div>
                Films:
                <ul>
                    {movies.map(film => (
                        <li key={film.url}>
                            <Link
                                to={{
                                    pathname: `/film/${getIdFromUrl(film.url)}`,
                                    state: { film }
                                }}
                            >
                                {film.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {vehicles.length > 0 && <P> Vehicles: {vehicles}</P>}
            {starships.length > 0 && <P>Ships: {starships}</P>}
        </>
    );
}

export default Person;
