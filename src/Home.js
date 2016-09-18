import React from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router"
import Content from "./componment/Content.js"
import {browserHistory} from  'react-router'

class Home extends React.Component {
  handleClick(){
    browserHistory.push("work")
  }
  render () {
    return(
      <div>
        <div className="jumbotron">
          <h1>yami no houno ni dakarete kiero！</h1>
          <p>闇の炎に抱かれて消えろっ！</p>
          <p><a className="btn btn-primary btn-lg" role="button" onClick={this.handleClick.bind(this)}>被漆黑烈焰吞噬殆尽吧</a></p>
        </div>
        <Content />
      </div>
    )
  }

}

export default Home;
