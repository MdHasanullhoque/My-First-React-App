import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([])


    const handleVisistedCountries = (country) => {

        console.log('handle Visisted Countries', country)
    }
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries

    return (
        <div>
            <h3>In The Countries: {countries.length}</h3>
            <h4>Total Country Visited By Me: </h4>

            <div className='countries'>

                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisistedCountries={handleVisistedCountries}

                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;