import React from 'react'
import ReactDOM from 'react-dom'
import Kurssi from './components/Kurssi'

const Kurssit = ( {kurssit} ) => {
  console.log(kurssit)
  return(
     kurssit.map(kurssi => <li key={kurssi.id}><Kurssi key={kurssi.id} kurssi={kurssi} /></li>)
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
