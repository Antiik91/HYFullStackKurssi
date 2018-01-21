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
    return (
      <div>
        <h3> anna palautetta </h3>
          <button onClick={this.handleGood}>hyvä</button>
          <button onClick={this.handleNeutral}>neutraali</button>
          <button onClick={this.handleBad}>huono</button>
        <h3> statistiikka </h3>
          <p> hyvä {this.state.good} </p>
          <p> neutraali {this.state.neutral} </p>
          <p> huono {this.state.bad} </p>
          <p> keskiarvo {average()} </p>
          <p> positivisia {positive()} %</p>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
