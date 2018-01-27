import React from 'react';
import Person from './Person'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }
  handlePersonChange = (event) => {
    this.setState({newName: event.target.value})
  }
  addPerson = (event) => {
     event.preventDefault()
     const personObject = {
       name: this.state.newName,
       id: this.state.newName
     }
     const persons = this.state.persons.concat(personObject)
     this.setState({
       persons,
       newName: ''
     })
  }
  render() {
    return (
      <div>
      <div>
        debug: {this.state.newName}
       </div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input
              value={this.state.newName}
              onChange = {this.handlePersonChange}
              />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
          {this.state.persons.map(person => <Person key={person.name} person={person}/>)}
        </ul>
      </div>
    )
  }
}

export default App
