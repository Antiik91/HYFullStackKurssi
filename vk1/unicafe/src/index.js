import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }
  handleGood = () => {
    this.setState ({
      good: this.state.good +1
    })
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
    </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
