import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const P = styled.p`
    margin:0;
`


function Person(props) {
    const { name, birth_year, films, vehicles, starships } = props.location.state.person;

    return (
        <>
            <P>Name: {name}</P>
            <P>Birth year: {birth_year}</P>
            <P>Films: {films}</P>
            {vehicles.length > 0 && <P> Vehicles: {vehicles}</P>}
            {starships.length > 0 && <P>Ships: {starships}</P>}
        </>
    );
}

export default Person;
