import React from 'react';
import './Country.css';

const Country = ({country}) => {
    // console.log(country.population.population)
    return (
       <div className='country'>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
    <h3>Name: {country.name.common}</h3>
    <p>population: {country.population.population}</p>
    </div>
    );
};

export default Country;