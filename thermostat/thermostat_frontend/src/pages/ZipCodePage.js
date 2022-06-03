import React, { Component } from 'react'
// import { Link } from "react-router-dom"
import ThermostatAPI from '../api/ThermostatAPI.js'

class ZipCodePage extends Component {

  state = {
    ailment: null
  }


   async getZipCode() {
    const id = this.props.match.params.zip_codeId

    let response = await ThermostatAPI.fetchZipCodeByID(id)
    console.log('response: ', response)

    this.setState({
      zip_code: response
      
    })
   }


  componentDidMount() {
    this.getZipCode()
  }


  renderZipCode()  {
     if (!this.state.zip_code) {
       return <p>No zip code found!</p>
     }
     
     return (
             <div>
               <h1>{this.state.zip_code.name}</h1>
             </div>
           )
          
         }


  render() {
    
    return (
      <div>
        <h1>Your Zip Code: </h1>
        <h4>{ this.renderZipCode() }</h4>
      </div>
    )
  }
}


export default ZipCodePage