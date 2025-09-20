import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const [visited, setVisited] = useState(false);
  console.log(handleVisitedCountries);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className='country'>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
       <p>Population: {country.population.population}</p>
      <p>
        {/* Area: {country.area} {country.area > 300000 ? 'Big Country' : 'Small Country'} */}
      </p>
      <button className='bg-amber-500' onClick={handleVisited}>
        {visited ? 'Visited' : 'Not Visited'}
      </button>
      <button className='bg-green-500' onClick={()=>{ handleVisitedFlag(country?.flags?.flags?.png)}}>Add Flag</button>
    </div>
  );
};

export default Country;
