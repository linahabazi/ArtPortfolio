import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Portfolio = ({ match }) => (
  <div>
    <h1>PORTFOLIO</h1>
    <ul>
      <li>
        <Link to={`${match.url}/painting`}>
          Painting
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/drawing`}>
          Drawing
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/digitalart`}>
          Digital Art
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

export default Portfolio