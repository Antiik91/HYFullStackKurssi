import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0
    }
    this.click = this.click.bind(this)
    this.vote = this.vote.bind(this)
  }

  vote = (votes) => {
    console.log(this.props.anecdotes[this.state.selected].votes);
    return () => {
      this.props.anecdotes[this.state.selected].votes = this.props.anecdotes[this.state.selected].votes +1
    }
  }
   click = () => {
     let val = Math.floor(Math.random()*this.props.anecdotes.length)
     return () => {
       this.props.anecdotes.sort(function(a,b){return b.votes - a.votes})
       this.setState ({
       selected: val
     })
   }
  }
  render() {
    const Button =({handleClick,text}) => (
        <button onClick={handleClick}>
         {text}
        </button>
      )
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected].anecdote}</p>
        <p>has {this.props.anecdotes[this.state.selected].votes} votes</p>
        <Button
          handleClick={this.vote(this.props.anecdotes[this.state.selected].votes + 1)}
          text = 'vote' />
        <Button
          handleClick={this.click()}
          text='next anecdote' />
        <h3> anecdote with most votes:</h3>
        <div>
        <p>{this.props.anecdotes[0].anecdote}</p>
        <p> has {this.props.anecdotes[0].votes} votes </p>
        </div>

      </div>
    )
  }
}

const anecdotes = [
  {anecdote: 'If it hurts, do it more often',
  votes: 0},
  {anecdote:'Adding manpower to a late software project makes it later!',
   votes: 0},
  {anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
   votes: 0},
  {anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
   votes: 0},
  {anecdote: 'Premature optimization is the root of all evil.',
   votes: 0},
  {anecdote:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
   votes: 0}
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
