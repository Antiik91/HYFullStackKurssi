import React from 'react';
import Person from './Person'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: "040-5112312" }
      ],
      newName: '',
      newNumber: ''
    }
  }
  handlePersonChange = (event) => {
    this.setState({newName: event.target.value})
  }
  handleNumberChange = (event) => {
    this.setState({newNumber: event.target.value})
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
       newNumber: ''
     })
   } else {
     alert('Valitsemasi nimi on jo listassa!')
   }
  }
  render() {
    return (
      <div>
      <div>
        debug: {this.state.newName} JA {this.state.newNumber}
       </div>
        <h2>Puhelinluettelo</h2>
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
          {this.state.persons.map(person => <Person key={person.name}  number={person.number}person={person}/>)}
        </ul>
      </div>
    )
  }
}

export default App
