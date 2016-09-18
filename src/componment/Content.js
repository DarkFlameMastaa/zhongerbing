import React from "react"
import ReactDOM from "react-dom"

class Content extends React.Component {

  render () {
    return(
      <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-2 bg">.col-xs-2</div>
              <div className="col-xs-2 bg">.col-xs-2</div>
              <div className="col-xs-2 bg">.col-xs-2</div>
              <div className="col-xs-2 bg">.col-xs-2</div>
              <div className="col-xs-2 bg">.col-xs-2</div>
              <div className="col-xs-2 bg">.col-xs-2</div>
            </div>
            <div className="row">
              <div className="col-xs-2 col-xs-offset-2 bg">.col-xs-2</div>
              <div className="col-xs-2 col-xs-offset-1 bg">.col-xs-2</div>
              <div className="col-xs-2 bg">.col-xs-2</div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-4 bg">我が名はダークフレイムマスター闇の炎に抱かれて死ね！</div>
              <div className="col-xs-6 col-md-4 bg">wa ga na ha ta-kufureimumasuta- yaminohounidakaretesine！</div>
              <div className="col-xs-6 col-md-4 bg">我之名为ta-kufureimumasuta被漆黑烈焰吞噬而亡吧</div>
            </div>
          </div>
        </div>
      )
    }

  }

  export default Content;
