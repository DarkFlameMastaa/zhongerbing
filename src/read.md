/*如果这里不用browserHistory拥hashiHistory就需要这样访问http://localhost:3003/#/about  这里的#代表主页#/about代表从主页找about然后后面会自动生成哈希值*/
```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import About from './About.js'
import {Router,Route,browserHistory,hashHistory} from  'react-router'
import './main.css'
<Router history={browserHistory}>
ReactDOM.render(
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
  </Router>, document.getElementById('app'));

```
