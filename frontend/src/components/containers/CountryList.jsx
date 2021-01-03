import React from 'react'
import Country from './Country'

const CountryList = ({countryList, ...rest}) => {
    return (
        <div className="select">
          <select className="input" {...rest}>
            <option disabled>Select a country</option>
            {countryList.map((country, index) => (
             <Country country={country} key={index}/>
            ))}
          </select>
        </div>
    )
}

export default CountryList
