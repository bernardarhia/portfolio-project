import React from 'react'

const Country = ({country}) => {
    return (
        <option value={country}>
        {country}
      </option>
    )
}

export default Country
