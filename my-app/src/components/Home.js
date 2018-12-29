import '../styles/Home.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';
import Portfolio from './Portfolio'
import Contact from './Contact'
import About from './About'

class Home extends Component {
  prevRoute = "/";
  loaded = false;
  currRoute = "";

  componentDidMount() {
    console.log("component did mount");
    
    var header = document.getElementById("header");
    var appContent = document.getElementById("appContent");
    console.log(header);
    console.log(appContent);
    console.log(this.props);
    console.log(this.currRoute);

    this.navigate(this.currRoute);
  }

  navigate(path) {
    console.log(this.prevRoute);
    console.log(path);

    var header = document.getElementById("header");
    var appContent = document.getElementById("appContent");
    console.log(header);
    console.log(appContent);
    if (path == "/") {
      header.style.flex = 1;
      appContent.style.flex = 0;
      document.getElementById(this.prevRoute).style.borderBottomWidth = "0px";
      document.getElementById(path).style.borderBottomWidth = "3px";
    } else {
      header.style.flex = 0;
      appContent.style.flex = 1;
    }
    if (path == "/about") {
      document.getElementById(this.prevRoute).style.borderBottomWidth = "0px";
      document.getElementById(path).style.borderBottomWidth = "3px";
    } else if (path == "/portfolio") {
      document.getElementById(this.prevRoute).style.borderBottomWidth = "0px";
      document.getElementById(path).style.borderBottomWidth = "3px";
    } else if (path == "/contact") {
      document.getElementById(this.prevRoute).style.borderBottomWidth = "0px";
      document.getElementById(path).style.borderBottomWidth = "3px";
    }
    this.prevRoute = path;
  }

  render() {
    console.log("start render");
    console.log(this.props);

    return (
      <Router>
        <div id="appContainer">
          <Route render={(props) => {
            console.log(props.location);
            this.currRoute = props.location.pathname;
            return (
              <div id="header">
                <Link to="/" id="headerLink" onClick={() => this.navigate("/")}><h1>LINA HABAZI</h1></Link>
                <h2>artist&nbsp;&nbsp;•&nbsp;&nbsp;developer&nbsp;&nbsp;•&nbsp;&nbsp;learner</h2>
              </div>
          )}} />

          <nav>
            <ul>
              <li><Link to="/" class="navLink" id="/" onClick={() => this.navigate("/")}>HOME</Link></li>
              <li><Link to="/about" class="navLink" id="/about" onClick={() => this.navigate("/about")}>ABOUT</Link></li>
              <li><Link to="/portfolio" class="navLink" id="/portfolio" onClick={() => this.navigate("/portfolio")}>PORTFOLIO</Link></li>
              <li><Link to="/contact" class="navLink" id="/contact" onClick={() => this.navigate("/contact")}>CONTACT</Link></li>
              <li><a href="https://instagram.com/ni3lina" target="_blank" class="navLink" id="insta">INSTAGRAM</a></li>
              <li><a href="https://github.com/linahabazi" target="_blank" class="navLink" id="github">GITHUB</a></li>
            </ul>
          </nav>

          <div id="appContent">
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            >
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </AnimatedSwitch>
          </div>
        </div>
      </Router>
    )
  }
}

export default Home