import React from "react"
import TopBar from "./TopBar"
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import { bindActionCreators } from "redux"
import actions from '../actions/actions'
import '../assets/app.less'

class App extends React.Component{
      render(){
          let state = this.props.state.appReducer
          let liststate = this.props.state.listReducer.products
          let productionListArr = []
          console.log(this.props.state)
          return(
              <div id='content'>
              <TopBar title='首页' recordBtn/>
              <p className='info'>请录入您的信息</p>
              <p className='input-line'><span>销售金额：</span><input type='text' placeholder='请输入订单金额' value={state.formData.moneyCount} onChange={(e)=>{this.props.changeMoney(e.target.value)}}/></p>
              <p className='input-line'><span>客户姓名：</span><input type='text' placeholder='请输入客户姓名' value={state.formData.userName} onChange={(e)=>{this.props.changeName(e.target.value)}}/></p>
              <p className='input-line'><span>客户电话：</span><input type='text' placeholder='请输入客户电话' value={state.formData.userTel} onChange={(e)=>{this.props.changeTel(e.target.value)}}/></p>
              <p className='info' onClick={()=>{console.log(state)}}>请选择销售的产品</p>
              <Link to="/production" exact className="production-line">
              
                  {liststate.length>0&&
                      liststate.map((item,index)=>{
                        if(item.isSlect&&item.count>0){productionListArr.push(item);}
                      })
                  }
                  {productionListArr.length>0?<ul>
                    {productionListArr.map((obj,index)=>{
                    return <li key={index}>{obj.name}*{obj.count}</li>
                    })}
                  </ul>:'选择产品'}
                </Link>
              <p className='info'>请上传发票凭证</p>
              <div className='picUpload'>
              <div className='box'><span>上传图片</span><input type='file'  onChange={(e)=>{this.props.changeImg(e.target.files[0])}}/></div>
              <p className='uploadImgbox'><img src={state.ticket.surl} className='uploadImg'/></p>
              </div>
              <div className='submitBtn'>提交</div>

              </div>

          )
      }
}

const mapStateToProps = (state) => ({
    state:state,
  })
  
const mapDispatchToProps = (dispatch) => ({
    changeMoney:bindActionCreators(actions.changeMoney,dispatch),
    //changeMoney: num => dispatch(actions.changeMoney(num)),
    changeName:bindActionCreators(actions.changeName,dispatch),
    changeTel:bindActionCreators(actions.changeTel,dispatch),
    changeImg:bindActionCreators(actions.changeImg,dispatch),
})
export default connect(mapStateToProps,mapDispatchToProps)(App)
