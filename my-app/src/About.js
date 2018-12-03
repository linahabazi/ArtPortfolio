import './About.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class About extends Component {
  render() { 
    return (
      <div id="title">
        <h1>ABOUT</h1>
      </div>
    )
  }
}

export default About