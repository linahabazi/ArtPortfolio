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
  prevRoute = "homeLink";
  loaded = false;
  currRoute = "";

  componentDidMount() {
    console.log("component did mount");

    // document.getElementById(this.prevRoute).style.borderBottomWidth = "3px";
    //based on current url, transform screen to show content, i can scroll down when url is /about but it looks like home screen (basically adjust flex and tab indicator)
    
    var header = document.getElementById("header");
    var appContent = document.getElementById("appContent");
    console.log(header);
    console.log(appContent);
    console.log(this.props);
    console.log(this.currRoute);

    this.navigate(this.currRoute.substr(1) + 'Link');
  }

  navigate(path) {
    console.log(this.prevRoute);
    console.log(path);

    var header = document.getElementById("header");
    var appContent = document.getElementById("appContent");
    console.log(header);
    console.log(appContent);
    if (path == "homeLink") {
      header.style.flex = 1;
      appContent.style.flex = 0;
      document.getElementById(this.prevRoute).style.borderBottomWidth = "0px";
      document.getElementById(path).style.borderBottomWidth = "3px";
    } else {
      header.style.flex = 0;
      appContent.style.flex = 1;
    }
    if (path == "aboutLink") {
      document.getElementById(this.prevRoute).style.borderBottomWidth = "0px";
      document.getElementById(path).style.borderBottomWidth = "3px";
    } else if (path == "portfolioLink") {
      document.getElementById(this.prevRoute).style.borderBottomWidth = "0px";
      document.getElementById(path).style.borderBottomWidth = "3px";
    } else if (path == "contactLink") {
      document.getElementById(this.prevRoute).style.borderBottomWidth = "0px";
      document.getElementById(path).style.borderBottomWidth = "3px";
    }
    this.prevRoute = path;
  }

  //try having loading spinner, after "header" is rendered, call navigate

  render() {
    console.log("start render");
    console.log(this.props);
    // if (this.loaded) { 
    //   var header = document.getElementById("header");
    //   var appContent = document.getElementById("appContent");
    //   console.log(header);
    //   console.log(appContent);
    //   console.log(this.props);
    // }
    return (
      <Router>
        <div id="appContainer">

          {/* <div id="header">
            <Link to="/" id="headerLink" onClick={() => this.navigate("homeLink")}><h1>LINA HABAZI</h1></Link>
            <h2>artist&nbsp;&nbsp;•&nbsp;&nbsp;developer&nbsp;&nbsp;•&nbsp;&nbsp;learner</h2>
          </div> */}

          <Route render={(props) => {
            console.log(props.location);
            this.currRoute = props.location.pathname;
            // navigate(props.location.pathname.substr(1))
            // this.navigate(props.location.pathname.substr(1)+'Link');
            return (
              <div id="header">
                <Link to="/" id="headerLink" onClick={() => this.navigate("homeLink")}><h1>LINA HABAZI</h1></Link>
                <h2>artist&nbsp;&nbsp;•&nbsp;&nbsp;developer&nbsp;&nbsp;•&nbsp;&nbsp;learner</h2>
              </div>
          )}} />

          <nav>
            <ul>
              <li><Link to="/" class="navLink" id="homeLink" onClick={() => this.navigate("homeLink")}>HOME</Link></li>
              <li><Link to="/about" class="navLink" id="aboutLink" onClick={() => this.navigate("aboutLink")}>ABOUT</Link></li>
              <li><Link to="/portfolio" class="navLink" id="portfolioLink" onClick={() => this.navigate("portfolioLink")}>PORTFOLIO</Link></li>
              <li><Link to="/contact" class="navLink" id="contactLink" onClick={() => this.navigate("contactLink")}>CONTACT</Link></li>
              <li><a href="https://instagram.com/ni3lina" target="_blank" class="navLink" id="instaLink">INSTAGRAM</a></li>
              <li><a href="https://github.com/linahabazi" target="_blank" class="navLink" id="githubLink">GITHUB</a></li>
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