import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes.js'
import NotFound from './404.js'
import Marked from './Marked.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Router,Route} from  'react-router'
import './main.css'

ReactDOM.render(
  <div>
    <Routes/>
  </div>
, document.getElementById('app'));

// ReactDOM.render(
//   <div>
//     <Marked />
//   </div>
// , document.getElementById('app'));

// import React from "react"
// import ReactDOM from "react-dom"
// import {Link,Route,Router,Redirect,IndexRoute} from "react-router"
//
// class aApp extends React.Component {
//
//   render () {
//     return(
//       <div>
//         <ul>
//           <li><Link to="/aabout">aAbout</Link></li>
//           <li><Link to="/alogin">aLogin</Link><br/></li>
//           <li><Link to="/33">过期的页面</Link><br/></li>
//         </ul>
//         <h1>我是aAPP组件</h1>
//         {this.props.children}
//       </div>
//     )
//   }
// }
// class aAbout extends React.Component {
//   render () {
//     return(
//       <div>
//         About
//       </div>
//     )
//   }
// }
// class aLogin extends React.Component {
//   render () {
//     return(
//       <div>
//         Login
//       </div>
//     )
//   }
// }
// class Index extends React.Component {
//   render () {
//     return(
//       <div>
//         Index
//         Index
//         Index
//       </div>
//     )
//   }
// }
// class NotFound extends React.Component {
//   render () {
//     return(
//       <div>
//         404
//         NotFound
//       </div>
//     )
//   }
// }
// class Message extends React.Component {
//   render () {
//     return(
//       <div>
//         {this.props.params.id}
//       </div>
//     )
//   }
// }
// ReactDOM.render((
//     <Router>
//         <Route path="/" component={aApp}>
//           <IndexRoute component={Index}/>
//           <Route path="aabout" component={aAbout}/>
//           <Route path="alogin" component={aLogin}>
//             <Route path="/messages/:id" component={Message} />
//             <Redirect from="messages/:id" to="/messages/:id" />
//           </Route>
//         </Route>
//         <Route path="*" component={NotFound}/>
//     </Router>
// )
//   ,document.getElementById('app'));
