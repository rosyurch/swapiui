import React from 'react';

function Film(props) {
    return <>{props.location.state ? props.location.state.film.title : ' '}</>;
}

export default Film;
