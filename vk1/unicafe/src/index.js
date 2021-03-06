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
    this.click = this.click.bind(this)
  }
  click = (gnb,value) => {
      if(gnb === 'good') {
        return () => {
          this.setState ({
            good:value
          })
        }
      }else if (gnb === 'neutral') {
        return () => {
          this.setState ({
            neutral: value
          })
        }
      }
      return () => {
        this.setState ({
          bad: value
        })
      }
    }

  render() {
    const Button =({handleClick, text}) => (
      <button onClick={handleClick}>
       {text}
      </button>
    )
    const Statistic =({statistic,text}) => {
      if(text==='positiivisia') {
        return (<tr><td> {text} {statistic} %</td></tr>)
      }
      return (<tr><td> {text} {statistic} </td></tr>)
    }
    const Statistics = ({stats,total}) => {
      if(total===0){
        return (<table><tbody><tr><td>ei yhtään palautetta annettu</td></tr>
        </tbody></table>)
      }
      return ( <table><tbody>
          <Statistic text={stats[0].name} statistic={stats[0].value} />
          <Statistic text={stats[1].name} statistic={stats[1].value} />
          <Statistic text={stats[2].name} statistic={stats[2].value} />
          <Statistic text={stats[3].name} statistic={stats[3].value} />
          <Statistic text={stats[4].name} statistic={stats[4].value} />
        </tbody>
        </table>
        )
    }
    const total = () => this.state.bad + this.state.good + this.state.neutral
    const average = () => {
    const all = total()
      if(all === 0) {
        return 0
      } else {
        return Math.round(((this.state.good - this.state.bad) / all) *10) / 10
      }
    }
    const positive = () => {
      const all = total()
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
            handleClick={this.click("good",this.state.good +1)}
            text="hyvä" />
            <Button
              handleClick={this.click("neutral",this.state.neutral+1)}
              text="neutraali" />
            <Button
              handleClick={this.click("bad",this.state.bad +1)}
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
