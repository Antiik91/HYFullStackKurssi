import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component{
  constructor(props) {
    /*Tehtävä 1.7 tekemäti */
    super(props)
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      ka: 0,
      pos: 0
    }
  }
  updateStats = () => {
      console.log('HEIMOI');
      this.setState ({
        ka: this.state.ka +2
      })
  }
  click = (feedback) => {
      return () => {}
      this.setState ({
        good:feedback+2
      })
    }

  handleGood = () => {
    this.setState ({
      good: this.state.good +1
    })
    this.updateStats
  }
  handleNeutral = () => {
    this.setState ({
      neutral: this.state.neutral +1
    })
  }
  handleBad = () => {
    this.setState ({
      bad: this.state.bad +1
    })
  }
  render() {
    const Button =({handleClick, text}) => (
      <button onClick={handleClick}>
       {text}
       </button>
    )
    const Statistic =({statistic,text}) => {
      if(text==='positiivisia') {
        return (<p> {text} {statistic} %</p>)
      }
      return (<p> {text} {statistic} </p>)
    }
    const Statistics = ({stats,total}) => {
      if(total==0){
        return <div> ei yhtään palautetta annettu </div>
      }
      return (
        <div>
          <Statistic text={stats[0].name} statistic={stats[0].value} />
          <Statistic text={stats[1].name} statistic={stats[1].value} />
          <Statistic text={stats[2].name} statistic={stats[2].value} />
          <Statistic text={stats[3].name} statistic={stats[3].value} />
          <Statistic text={stats[4].name} statistic={stats[4].value} />
          </div>
        )
    }
    const total = () => this.state.bad + this.state.good + this.state.neutral
    const average = () => {
      let all = this.state.bad + this.state.neutral + this.state.good
      if(all === 0) {
        return 0
      } else {
        return Math.round(((this.state.good - this.state.bad) / all) *10) / 10
      }
    }
    const positive = () => {
      let all = this.state.bad + this.state.neutral + this.state.good
      if(all === 0) return 0
      return Math.round((this.state.good / all) * 1000) / 10
    }
    const stats = [
      {
      name: 'hyvä',
      value: this.state.good
    },
    {
      name: 'neutraali',
      value: this.state.neutral
    },
    {
      name:'huono',
      value: this.state.bad
    },
    {
      name: 'keskiarvo',
      value: average()
    },
    {
      name: 'positiivisia',
      value: positive()
    }
    ]
    return (
      <div>
        <h3> anna palautetta </h3>
          <Button
            handleClick={this.handleGood}
            text="hyvä" />
            <Button
              handleClick={this.handleNeutral}
              text="neutraali" />
            <Button
              handleClick={this.handleBad}
              text="huono" />

        <h3> statistiikka </h3>
         <Statistics stats={stats} total={total()}/>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
