import React from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router"
import axios from 'axios'
import Card from './componment/Card.js'
import {zhongerbingData} from './utils/Data.js'

class Work extends React.Component {
  constructor(){
    super();
    this.state={
      zhongerbingData:[],
      wait:true
    }
  }
  componentDidMount() {
    zhongerbingData().then((recData) => {
        this.setState({
          zhongerbingData:recData,
          wait:false
        });
        }
    )
  }
  render () {
    let cards=this.state.zhongerbingData.map((item,i) => {
        return(<Card {...item} key={i}/>)
      })
    return(
      <div className="container-fluid">
        <div className="row">
          {this.state.wait ? "请稍后" : cards}
        </div>
      </div>
    )
  }

}

export default Work;
