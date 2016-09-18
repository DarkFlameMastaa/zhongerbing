import React, { Component } from 'react';

import Bg1 from './images/xiaoyuewan.jpg';
import Bg2 from './images/guilin.jpg';
import Bg3 from './images/disini.jpg';
import Bg4 from './images/hongyegu.jpg';

class App extends Component {
  constructor(){
    super();
    this.state={
      nowShow:0
    }
  }
  tick() {
    this.setState({nowShow: this.state.nowShow + 1});
  }
  shouldComponentUpdate(nextProps,nextState){
    if (nextState.nowShow>3) {
      this.setState({nowShow:0})
    }
    return true
  }
  componentDidMount(){
    this.interval = setInterval(this.tick.bind(this), 3000);
  }
  scroll(){
    
  }
  render () {
    let styles={
      root:{
        width:'100%',
        overflow:'hidden'
      },
      ul:{
        transform:'translateX(-' + this.state.nowShow*25 +'%)',
        width:'400%',
        transition:'all 0.5s',
      },
      li:{
        listStyle:'none',
        width:'25%',
        float:'left',
      },
      img:{
        display:'block',
        width:'100%'
      }
    }
    return(
      <div style={styles.root}>
        <ul style={styles.ul} className="clearfix">
          <li style={styles.li}><img src={Bg1} style={styles.img}/></li>
          <li style={styles.li}><img src={Bg2} style={styles.img}/></li>
          <li style={styles.li}><img src={Bg3} style={styles.img}/></li>
          <li style={styles.li}><img src={Bg4} style={styles.img}/></li>
        </ul>
        <span className="arrow left" onClick={this.scroll.bind(this,-1)}>&lt;</span>
        <span className="arrow right" onClick={this.scroll.bind(this,1)}>&gt;</span>
      </div>
    )
  }
}

export default App;
