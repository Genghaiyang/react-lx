import React from "react"
import TopBar from "./TopBar"
import {Link} from "react-router-dom"
import '../assets/app.less'
class App extends React.Component{
      render(){
          return(
              <div id='content'>
              <TopBar title='首页' recordBtn/>
              <p className='info'>请录入您的信息</p>
              <p className='input-line'><span>销售金额：</span><input type='text' placeholder='请输入订单金额'/></p>
              <p className='input-line'><span>客户姓名：</span><input type='text' placeholder='请输入客户姓名'/></p>
              <p className='input-line'><span>客户电话：</span><input type='text' placeholder='请输入客户电话'/></p>
              <p className='info'>请选择销售的产品</p>
              <Link to="/production" exact className="production-line">选择产品</Link>
              <p className='info'>请上传发票凭证</p>
              <div className='picUpload'>
              <div className='box'><span>上传图片</span><input type='file'/></div>
              <img src='' className='uploadImg'/>
              </div>
              <div className='submitBtn'>提交</div>

              </div>

          )
      }
}
export default App