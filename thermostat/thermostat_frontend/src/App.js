import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import ZipCodePage from './pages/ZipCodePage'
import Nav from './pages/Nav'


class App extends Component {
  render() {
    return (
      <div>

        <BrowserRouter>
          <Nav />
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/zip_codes/:zip_codeId" exact component={ZipCodePage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App