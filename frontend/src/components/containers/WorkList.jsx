import React from 'react'
import Country from './Country'

const WorkList = ({workList}) => {
    return (
        <div className="select">
          <select className="input">
            <option>What do you do</option>
            {workList.map((work, index) => (
             <Country country={work} key={index} />
            ))}
          </select>
        </div>
    )
}

export default WorkList
