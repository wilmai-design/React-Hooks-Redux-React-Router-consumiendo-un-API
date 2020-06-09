import React from 'react';
import styled from 'styled-components';

const CountryStyled = styled.div `
    width: 264px;
    border: 1px solid red;
    text-align: left;
    border-radius: 5px;
    img {
        width: 100%;
        height: 160px;
        object-fit: cover;
    }
    .details {
        padding: 1.5rem;
    }
    h2 {
        margin: 0;
        margin-bottom: 1rem;
        font-size: 18px;
    }
    p {
        font-size: .9em;
        margin-bottom: .5rem;
    }
`

function Country({
    flag,
    name,
    population,
    region,
    capital,
}) {
    return (
        <CountryStyled>
            <img src={flag} alt="asa" />
            <div className="details">
                <h2>{name}</h2>
                <p><strong>Population:</strong>{population}</p>
                <p><strong>Region:</strong>{region}</p>
                <p><strong>Capital:</strong>{capital}</p>
            </div>
        </CountryStyled>
    )
}

export default Country;
