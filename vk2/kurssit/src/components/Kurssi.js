import React from 'react'

const Kurssi = ({ kurssi }) => {
  return (
      <ul>
        <li key ={kurssi.id}>
          <Otsikko kurssi = {kurssi} />
          <ul>
            <Sisalto osat = {kurssi.osat} />
            <Yhteensa osat = {kurssi.osat} />
          </ul>
        </li>
      </ul>
  )
}

const Osa = (osa) => <li key={osa.id}> {osa.nimi} {osa.tehtavia} </li>
const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
const Sisalto = ({osat}) => {
  return(
      osat.map(osa => <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia} />)
  )
}
const Yhteensa = ({osat}) => {
  const total = osat.reduce(function(sum, osa){
    return sum + osa.tehtavia
  },0)
  return(
    <li>yhteensä {total} tehtävää</li>
  )
}
export default Kurssi
