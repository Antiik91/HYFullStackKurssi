import React from 'react'
const Country = ({country}) => {
  return (
    <div>
      <h2> {country.name} </h2>
      <div> capital: {country.capital} </div>
      <div> population: {country.population} </div>
       <img src={country.flag} />
     </div>
  )
}
export default Country
