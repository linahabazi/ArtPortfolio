import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {onDisplay, descriptions} from "../constants/artwork.js"



// const Portfolio = ({ match }) => (
//   <div>
//     <ul id="galleriesNav">
//       <li>
//         <Link to={`${match.url}/painting`}>
//           Painting
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/illustration`}>
//           Illustration
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/photography`}>
//           Photography
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:topicId`} component={Topic} />
//     {/* <Route exact path={match.path} render={() => (
//       <h3>Galleries:</h3>
//     )} /> */}
//   </div>
// )

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    {/* <h1>{`onDisplay.${match.params.topicId}`}</h1> */}
    <h1>{'onDisplay.'+ match.params.topicId}</h1>
  </div>
)

class Portfolio extends Component {
  render() {
    return (
      <div>

        <ul id="galleriesNav">
          <li>
            <Link to={`${this.props.match.url}/painting`}>
              Painting
        </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/illustration`}>
              Illustration
        </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/photography`}>
              Photography
        </Link>
          </li>
        </ul>
        <hr/>
        <Route path={`${this.props.match.path}/:topicId`} component={Topic} />

      </div>
    )
  }
}

export default Portfolio


