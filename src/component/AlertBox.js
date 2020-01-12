import React from "react"
import '../assets/alert.less'
class AlertBox extends React.Component {
    /* handleClick(){
        document.getElementById('alertBox').style='display:none'
    } */
    
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
}
export default AlertBox