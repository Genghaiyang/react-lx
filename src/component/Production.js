import React from "react"
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import { bindActionCreators } from "redux"
import TopBar from "./TopBar"
import actions from '../actions/actions'
import '../assets/production.less'
class Production extends React.Component{
      render(){
          const state = this.props.state.products;
          const isSlectTrue = 'slect-active'
          const isSlectFalse = 'slect-active-no'
          console.log()
          return(
              <div id='production-layer'>
              <TopBar title='首页' confirmBtn/>
              <ul>
                  {state.map((item, index)=>{
                  return <li key={index} data-order={index}><i className={item.isSlect?isSlectTrue:isSlectFalse} onClick={(e)=>{this.props.TootleSlect(e.target.parentNode.getAttribute('data-order'))}}></i><span className='name'>{item.name}</span><p className='btn-r-box'><i>-</i><b>{item.count}</b><i>+</i></p></li>   
                  })}
              </ul>
              </div>
          )
      }
}
const mapStateToProps = (state) => ({
    state:state.listReducer,
  })
const mapDispatchToProps = (dispatch) => ({
    TootleSlect:bindActionCreators(actions.TootleSlect,dispatch),
    AddNumCount:bindActionCreators(actions.AddNumCount,dispatch),
    PlusNumCount:bindActionCreators(actions.PlusNumCount,dispatch),

})
export default connect(mapStateToProps,mapDispatchToProps)(Production)