import React from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router"
import {serchUserName} from "./utils/Data.js"
import axios from 'axios'
class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:1,
      inputValue:""
    }
  }
  handleInputValue(e){
    this.setState({
      inputValue:e.target.value
    });
  }
  handleSelect(){
    this.setState({
      wait: 2
    });
    serchUserName(this.state.inputValue).then((recData)=>{
      this.setState({
        data:recData,
        wait:3
      });
    })
  }
  // axios.get('https://api.github.com/users/DarkFlameMastaa').then((res) =>{
  //   console.log(res.data);
  //   this.setState({
  //     data:res.data
  //   });
  //   this.setState({
  //     wait:false
  //   });
  // })
  render () {
    let jiegou = (
      <div>
        <h1 className="text-center">{this.state.data.name}</h1>
        <img src={this.state.data.avatar_url} />
      </div>
    )
    return(
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleInputValue.bind(this)}/><button onClick={this.handleSelect.bind(this)}>搜索</button>
        {this.state.wait==1 ? "" : this.state.wait==2 ? "正在读取数据" : this.state.wait==3 ? jiegou : ""}
      </div>
    )
  }
}

export default About;
