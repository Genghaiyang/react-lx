import React from "react"
import {Link} from "react-router-dom"
import '../assets/header.less'
class TopBar extends React.Component{
      render(){
          return(
              <header className="head-bar">
                  <Link to="/nav" exact className="head-nav-btn"></Link>
                  <span>{this.props.title}</span>
                  {this.props.recordBtn&&<Link to="/record" className="head-record-btn"></Link>}
                  {this.props.confirmBtn&&<Link to="/" className="head-ok-btn">确定</Link>}
              </header>
          )
      }
}
export default TopBar