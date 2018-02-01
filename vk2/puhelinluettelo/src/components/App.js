import React from 'react';
import Person from './Person'
import personService from '/home/janantik/Opiskelu/HYFullStackKurssi/vk2/puhelinluettelo/src/services/persons'

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
    personService
      .getAll()
      .then(response => {
        this.setState({persons:response})
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
     const personObject = {
       name: this.state.newName,
       number: this.state.newNumber
     }
     let index = this.state.persons.findIndex(x => x.name === this.state.newName)
     if(index === -1) {
       personService
        .create(personObject)
        .then(newPerson => {
     this.setState({
       persons: this.state.persons.concat(newPerson),
       newName: '',
       newNumber: '',
      })
     })
   } else if (window.confirm(personObject.name + 'on jo luettelossa, korvataaanko vanha numero '+
   'uudella?')){
     const person = this.state.persons.find(person => person.name === personObject.name)
     this.updatePersonNumber(person, personObject.number)
   }
  }
  updatePersonNumber = (person, newNumber) => {
      const changedPerson = {...person, number: newNumber}
      console.log('Vanha num: ' +person.number+ ' Ja uusinum: ' + newNumber);
      personService
        .update(person.id,changedPerson)
        .then(updatedPerson => {
          this.setState({
            persons: this.state.persons.map(x => x.id !== person.id ? x : changedPerson)
          })
        })
  }
  poista = (removable) => {
    if(window.confirm('Haluatko varmasti poistaa ' + removable.name + ' ?')){
      const filter = this.state.persons.filter(person => person.id !== removable.id)
      personService
        .remove(removable.id)
        .then(data => {
          this.setState({
            persons: filter
          })
        })
    }
  }
  render() {
    const numbersToShow =
      this.state.filter === '' ?
        this.state.persons :
        this.state.persons.filter(person =>  person.name.toUpperCase().indexOf(this.state.filter.toUpperCase()) !== -1)
    return (
      <div>
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
          {numbersToShow.map(person =><li key={person.id}> <Person number={person.number} person={person}/>
            <button onClick={() => {this.poista(person)}}> poista </button></li>)}
        </ul>
      </div>
    )
  }
}

export default App
