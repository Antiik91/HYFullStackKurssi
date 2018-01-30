import React from 'react';
import axios from 'axios'
import Country from './Country'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      lands: [],
      searched: '',
      country: ''
    }
    this.countrysearch = this.countrysearch.bind(this)
    this.ShowCountry = this.ShowCountry.bind(this)
  }
  search = (event) => {
    this.setState({searched: event.target.value})
  }
  componentWillMount(){
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({lands: response.data})
      })
  }

  countrysearch() {
    const countries = this.state.lands.map(land => land.name)
    if(this.state.searched === '') {
      return ('')
    } else {
      const filteredCountries = countries.filter(country => country.toUpperCase().indexOf(this.state.searched.toUpperCase()) !== -1)
      if(filteredCountries.length > 10) {
        return ('Too many countries, please add another filter')
      } else if(filteredCountries.length === 1) {
        const country = this.state.lands.find(x => x.name.toUpperCase().indexOf(this.state.searched.toUpperCase()) !== -1).name
        return this.ShowCountry(country)
      }
    
      return(
        filteredCountries.map(country => <li key={country} onClick={this.handleClick.bind(this, country)}> {country} </li>)
      )
    }
  }
  handleClick(countryName) {
    console.log('Maan nimi: ', countryName);
    this.setState({country: countryName})
  }
  ShowCountry(country) {
    const details = this.state.lands.find(x => x.name.toUpperCase().indexOf(country.toUpperCase()) !== -1)
    return (<Country country={details} />)
}
renderSubComp() {
  if(this.state.country !== '') {
    return this.ShowCountry(this.state.country)
  }
}
  render() {
    const filterLands =  this.countrysearch()
    return (
      <div>
        <div>
          find countries: <input
            onChange = {this.search} />
        </div>
        <div>
          <div>
            {filterLands}
            {this.renderSubComp()}
          </div>
        </div>
      </div>
    )

  }
}

export default App;
