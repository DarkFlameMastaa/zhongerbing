import React, { PropTypes } from 'react'
import marked from 'marked'

class Marked extends React.Component {
  componentDidMount() {
    console.log(marked('I am using __markdown__.'));
  }
  render () {
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html:""}} />
      </div>
    )
  }
}

export default Marked;
