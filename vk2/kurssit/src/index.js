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
    <li>yhteensä {total} tehtävää</li>
  )
}
const Kurssit = ( {kurssit} ) => {
  console.log(kurssit)
  return(
     kurssit.map(kurssi => <li key={kurssi.id}><Kurssi key={kurssi.id} kurssi={kurssi} /></li>)
   )
}
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
const App = () => {
  const kurssit = [
  {
    nimi: 'Half Stack -sovelluskehitys',
    id: 1,
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
  },
  {
    nimi: 'Node.js',
    id: 2,
    osat: [
      {
        id: 1,
        nimi: 'Routing',
        tehtavia: 2
      },
      {
        id: 2,
        nimi: 'Middlewaret',
        tehtavia: 7
      }
    ]
  }
]
  return (
    <div>
    <h1> Opetusohejlma </h1>
    <ul>
      <Kurssit kurssit={kurssit} />
    </ul>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
40
