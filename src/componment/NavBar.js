import React, { PropTypes } from 'react'
import {Link} from "react-router"

class NavBar extends React.Component {
  render () {
     return(
       <nav className="navbarNobottom navbar-default" role="navigation">
         <div className="container-fluid">
           <div className="navbar-header">
             <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
               <span className="sr-only">Toggle navigation</span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
             </button>
             <a className="navbar-brand" href="#">DarkFlameMastaa</a>
           </div>
           <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
             <ul className="nav navbar-nav">
               <li ><Link to="/" activeStyle={{background:"rgb(191, 183, 180)"}} onlyActiveOnIndex={true}>HOME</Link></li>
               <li><Link to="/work" activeStyle={{background:"rgb(191, 183, 180)"}}>WORK</Link></li>
               <li><Link to="/about" activeStyle={{background:"rgb(191, 183, 180)"}}>ABOUT ME</Link></li>
             </ul>
             </div>
           </div>
         </nav>
     )
  }
}

export default NavBar;
