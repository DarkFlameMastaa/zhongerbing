import React, { PropTypes } from 'react'

class Blog extends React.Component {
  render () {
    console.log(this.props);
    return(
      <div>
        <h1 className="text-center">{this.props.params.title=="a" ? "Aこぼれてく记忆（きおく）の砂（すな）" :     this.props.params.title=="b" ? "B芽生（めば）えた想（おも）いまで" : this.props.params.title=="c" ? "Cねえ　こんなに呆気（あっけ）なく" : this.props.params.title=="d" ? "D消（き）えてしまうの" : "访问错误没有这个页面"
         }</h1>
      </div>
    )
  }
}

export default Blog;
