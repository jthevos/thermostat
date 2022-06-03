import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ThermostatAPI from "../api/ThermostatAPI"
import ZipCodeSummary from '../components/ZipCodeSummary'


class HomePage extends Component {

  state = {
    zip_codes: []
  }

  componentDidMount(){
    ThermostatAPI.fetchZipCodes()
      .then((apiResponseJSON) => {
        console.log(apiResponseJSON)
        this.setState({
          zip_codes: apiResponseJSON
        })
      }
    )
  }

        addZipCode = async () => {
          let input = document.getElementById("new-zip-code")
          if (input) {
            let newZipCodeParam = {
              name: input.value
              
            }
            let data = await ThermostatAPI.addZipCode(newZipCodeParam)

             if (data) {
                let newZipCodes = [...this.state.zip_codes, data]
                this.setState({zip_codes: newZipCodes})
            }
          }
        }


        deleteZipCode = async (zip_codeId) => {
            try {
              if (zip_codeId > 0) {
                let result = await ThermostatAPI.deleteZipCode(zip_codeId)

                console.log(result)

                if (result.success) {
                  let newZipCodes = this.state.zip_codes.filter((zip_code, index) => {
                    return zip_code.id !== zip_codeId
                  })

                  this.setState({zip_codes: newZipCodes})
                  console.log(this.state)
                }
              }
            }
          catch {
            console.log('unable to delete zip code')
                  
          }
        }



  renderZipCodes() {
    let renderedZipCodes = this.state.zip_codes.map((zip_code, index) => {
         return ( 
         <li key={`zip_code-${index}`}>
         <Link to={`/zip_codes/${this.props.match.params.zip_codeId}`}></Link>

           <ZipCodeSummary zip_code={zip_code} handleDelete={this.deleteZipCode}/>
         </li>
       )
    })


    // return renderedZipCodes
    return (
       <div>
            <h2>Zip Codes of Interest:</h2>
              <ul className="simple-list">
                { renderedZipCodes }

              </ul>
            
            <input id="new-zip-code" placeholder="Zip Code"/>
            <button onClick={this.addZipCode}>Add New Zip Code</button>
        </div>


    )
  }



  render() {
    return (
      <div>
        <h1>Smart Thermostat Setting Calculator</h1>
        <hr />
          <hr />
          { this.renderZipCodes() }
        <hr />
      </div>
    )
  }
}


export default HomePage