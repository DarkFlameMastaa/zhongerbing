import React, { PropTypes } from 'react'
import {getArticle} from './utils/Data.js'
import marked from 'marked'

class Blog extends React.Component {
  constructor(){
    super();
    this.state=({
      wait:true,
      articleData:""
    })
  }
  componentDidMount() {
    getArticle(this.props.params.title).then((recData) => {
        this.setState({
          articleData:recData,
          wait:false
        });
        }
    )
  }
  render () {
    console.log(this.props);
    let content=this.state.wait ? "正在读取数据" : marked(this.state.articleData)
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html:content}} />
      </div>
    )
  }
}

export default Blog;
