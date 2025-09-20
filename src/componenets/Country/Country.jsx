import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisistedCountries, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false)
    // console.log('handle click visit')
    //  console.log(country.flags.flags.png)
    // console.log(country.name.common)
    // console.log(country.population.population)
    // console.log(country.capital.capital)
    // console.log(country.region.region)
    // console.log(country.area.area)
    const handleVisisted = () => {
        // // setVisited(true)

        //condition  system

        // if (visited) {
        //     setVisited(false)
        // }
        // else {
        //     setVisited(true)
        // }

        //ternery system
        // setVisited(visited ? false : true);

        //logical not operator system
        setVisited(!visited)

        handleVisistedCountries(country)
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <p>Population: {country.population.population}</p>
            <p>Language: {country.languages.languages.eng}</p>
            <p>Area: {country.area.area} {country.area.area > 30000
                ? "  - Big Country " : '- Small Country'}</p>


            <button className='BtnVisitCheck' onClick={handleVisisted}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>

            {/* <button onClick={}>Add Visited Flag</button> */}
            <button onClick={() => { handleVisitedFlag(country.flags.flags.png) }}
            >Add Visited Flag</button>

        </div>
    );
};

export default Country;

