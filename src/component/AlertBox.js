import React from "react"
import '../assets/alert.less'
/* class AlertBox extends React.Component {
    
    render() {
        return (
            <div id='alertBox' style={{display: this.props.isshow ? "block" : "none"}}>
                <div className='box'>
                <p className='title'>{this.props.title}</p>
                <p className='btn' onClick={this.props.closeFun()}>确认</p>
                </div>
            </div>
        )
    }
} */
//编写无状态组件
const AlertBox = (props) => {
    
        return (
            <div id='alertBox' style={{display: props.isshow ? "block" : "none"}}>
                <div className='box'>
                <p className='title'>{props.title}</p>
                <p className='btn' onClick={props.closeFun()}>确认</p>
                </div>
            </div>
        )
    
}
export default AlertBox