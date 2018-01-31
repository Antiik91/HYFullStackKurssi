import React from 'react';
import Person from './Person'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }
  componentWillMount() {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        this.setState({persons: response.data})
      })
  }
  handlePersonChange = (event) => {
    this.setState({newName: event.target.value})
  }
  handleNumberChange = (event) => {
    this.setState({newNumber: event.target.value})
  }
  handleFiltering = (event) => {
    this.setState({filter: event.target.value})
  }

  addPerson = (event) => {
     event.preventDefault()
     console.log('HEI!', this.state);
     const personObject = {
       name: this.state.newName,
       number: this.state.newNumber
     }
     let index = this.state.persons.findIndex(x => x.name === this.state.newName)
     if(index === -1) {
       axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
     this.setState({
       persons: this.state.persons.concat(response.data),
       newName: '',
       newNumber: '',
      })
     })
   } else {
     alert('Valitsemasi nimi on jo listassa!')
   }
  }
  render() {
    const numbersToShow =
      this.state.filter === '' ?
        this.state.persons :
        this.state.persons.filter(person =>  person.name.toUpperCase().indexOf(this.state.filter.toUpperCase()) !== -1)
    return (
      <div>
      <div>
        debug: {this.state.newName} JA {this.state.newNumber}
       </div>
        <h2>Puhelinluettelo</h2>
        <div>
          rajaa näytettäviä: <input
            onChange = {this.handleFiltering} />
        </div>
        <h2> lisää uusi </h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input
              value = {this.state.newName}
              onChange = {this.handlePersonChange}
              />
          </div>
          <div>
            numero: <input
              value = {this.state.newNumber}
              onChange = {this.handleNumberChange}
              />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
          {numbersToShow.map(person => <Person key={person.name}  number={person.number}person={person}/>)}
        </ul>
      </div>
    )
  }
}

export default App
