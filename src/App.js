import React from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router"
import NavBar from "./componment/NavBar.js"
import Footer from "./componment/Footer.js"

class App extends React.Component {

  render () {
    return(
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;
