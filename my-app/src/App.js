// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Sound & Color</h1>
//         </header>
//         <p className="App-intro">
//           Start the experience
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
    </ul>
  </div>
)

const About = () => (
  <div>
    <ul id="navLinks">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
    </ul>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Portfolio = ({ match }) => (
  <div>
    <ul id="navLinks">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
    </ul>
    <h2>Portfolio</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

const BasicExample = () => (
  <Router>
    <div id="introDiv">
      <div id="leftDiv">
        <h2>"Those who write their own story</h2>
        <h3>inherit the earth of those words."</h3>
      </div>
      <div style={{ flex: 1 }}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
    </div>
  </Router>
)
export default BasicExample