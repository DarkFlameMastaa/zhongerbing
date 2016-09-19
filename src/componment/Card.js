import React, { PropTypes } from 'react'
import {hashHistory} from 'react-router'

class Card extends React.Component {
  handleJump(){
    let address=this.props.url;
    hashHistory.push(`blog/${address}`)
  }
  render () {
    return(
        <div className="col-sm-6 col-sm-4">
          <div className="thumbnail">
            <img src={this.props.img} alt="..."  />
            <div className="caption">
              <h3>{this.props.title}</h3>
              <p>{this.props.des}</p>
              <p><a className="btn btn-primary" role="button" onClick={this.handleJump.bind(this)}>Button</a></p>
            </div>
          </div>
        </div>
    )
  }
}

export default Card;
