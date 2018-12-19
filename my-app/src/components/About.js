import '../styles/About.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import artist from '../resources/artist.jpg'

class About extends Component {
  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    return (
      <div id="container">
        <span style={{ flex: 1 }} />
        <div id="content">
          <img src={artist} height="300"></img>
          <p>Lina Habazi is Palestinian-American student, artist, and aspiring software developer living in Houston, TX. She is studying Computer Science with a minor in Studio Art at the University of Houston. In her art, she likes to showcase the intersection of traditional Palestinian culture and her own experiences growing up in the US. As an artist and programmer, she wants to take on important issues by developing software solutions through a creative lens. She is inspired by young Palestinian artists using their creativity to make a change, and she hopes to someday encourage others to do the same.</p>
        </div>
        <span style={{ flex: 1 }} />
      </div>
    )
  }
}

export default About