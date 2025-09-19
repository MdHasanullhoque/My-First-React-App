import React from 'react';
import './Country.css'

const Country = ({ country }) => {
    //  console.log(country.flags.flags.png)
    // console.log(country.name.common)
    // console.log(country.population.population)
    // console.log(country.capital.capital)
    // console.log(country.region.region)
    // console.log(country.area.area)
    const handleVisisted = () => {
        console.log('btn clicked')
    }

    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <p>Population: {country.population.population}</p>
            <p>Language: {country.languages.languages.eng}</p>
            <p>Area: {country.area.area} {country.area.area > 30000
                ? "  - Big Country " : '- Small Country'}</p>


            <button className='BtnVisitCheck' onClick={handleVisisted}>Not Visited</button>
        </div>
    );
};

export default Country;

