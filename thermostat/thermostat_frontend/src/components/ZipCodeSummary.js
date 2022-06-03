import React, { Component } from 'react'
import { Link } from "react-router-dom"

class ZipCodeSummary extends Component {
  componentDidMount() {}
  
   render() {
     return (

    <div>
     <span>
        <Link to={`/zip_codes/${this.props.zip_code.id}`}>{this.props.zip_code.name}</Link>
          <button onClick={ () => this.props.handleDelete(this.props.zip_code.id)}>delete</button>
        </span>
     
  </div>
   )
 }
}

export default ZipCodeSummary; 