import React from 'react';
import ReactDOM from 'react-dom';
const Kurssi = (props) => {
  return(
    <h1>{props.kurssi}</h1>
  )
}
const Osa = (props) => {
  return (
    <p>{props.osa} {props.tehtavia}</p>
  )
}
const Sisalto =(props) => {
  return(
    <div>
    <Osa osa={props.osa1} tehtavia={props.tehtavia1}/>
    <Osa osa={props.osa2} tehtavia={props.tehtavia2}/>
    <Osa osa={props.osa3} tehtavia={props.tehtavia3}/>
    </div>
  )
}
const Yhteensa = (props) => {
  return (
  <p> Yhteensä {props.t1 + props.t2 + props.t3} tehtävää</p>
)}
const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
  nimi: 'Reactin perusteet',
  tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  return (
    <div>
      <Kurssi kurssi= {kurssi}/>
      <Sisalto osa1={osa1.nimi} osa2={osa2.nimi} osa3={osa3.nimi} tehtavia1={osa1.tehtavia}
      tehtavia2={osa2.tehtavia} tehtavia3={osa3.tehtavia} />
      <Yhteensa t1={osa1.tehtavia} t2={osa2.tehtavia} t3={osa3.tehtavia} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));
