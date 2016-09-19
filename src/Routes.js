import React from 'react'
import App from './App.js'
import About from './About.js'
import Home from './Home.js'
import Work from './Work.js'
import Blog from './Blog.js'
import NotFound from './404.js'
import {Router,Route,hashHistory,IndexRoute} from  'react-router'

class Routes extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/work" component={Work}/>
          <Route path="/blog/:title" component={Blog}/>
        </Route>
        <Route path="*" component={NotFound}/>
      </Router>
    )
  }
}

export default Routes;
