import React from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router"
import bk from "./images/404_04/4.jpg"
import bk1 from './images/383c4a88256bc5e26c8c1ac5750f9dbd.jpg'

class NotFound extends React.Component {
  render () {
    return(
      <div style={{position:"absolute",left:"0",top:"0",width:"100vw",height:"100vh",background:`url(${bk})`,backgroundSize:"100% auto"}}>
      </div>
    )
  }

}

export default NotFound;
