import React from 'react';
import Person from './Person'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: "040-5112312" },
        { name: 'Ville Valpas', number: "040-123411" },
        { name: 'Arto Kallas', number: "040-6545565" },
        { name: 'Jarno Jollas', number: "040-51141412312" }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
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
       const persons = this.state.persons.concat(personObject)

     this.setState({
       persons,
       newName: '',
       newNumber: '',
       backup: persons
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
