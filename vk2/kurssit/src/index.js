import React from 'react'
import ReactDOM from 'react-dom'

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
    <p>yhteensä {total} tehtävää</p>
  )
}

const Kurssi = ({ kurssi }) => {
  return (
    <div>
    <Otsikko kurssi = {kurssi} />
    <Sisalto osat = {kurssi.osat} />
    <Yhteensa osat = {kurssi.osat} />
    </div>
  )
}
const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        id: 1,
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        id: 2,
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        id: 3,
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }
  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
40
