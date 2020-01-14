import React from 'react'
import TopBar from './TopBar'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import AlertBox from '../component/AlertBox'
import '../assets/app.less'

class App extends React.Component {
    constructor(props){
        super(props)
        this.handlesubmitClick = this.handlesubmitClick.bind(this)
        this.alertFun = this.alertFun.bind(this)
    }
	handlesubmitClick() {
		let state = this.props.state.appReducer
		let alertTips = ''
		if (!state.formData.moneyCount) {
			//console.log(this.props)
			// this.props.alertBox({ title: '请填写金额！', isshow: true })
			alertTips = '请填写金额！'
		} else if (!state.formData.userName) {
			// this.props.alertBox({ title: '请填写姓名！', isshow: true })
			alertTips = '请填写姓名！'
		} else if (!state.formData.userTel) {
			// this.props.alertBox({ title: '请填写电话！', isshow: true })
			alertTips = '请填写电话！'
		} else {
			// this.props.alertBox({ title: '已提交！', isshow: true })
			alertTips = '已提交！'
		}

		this.props.alertBox({ title: alertTips, isshow: true })
	}

	alertFun() {
		return () => {
			this.props.alertBox({ title: '', isshow: false })
		}
	}

	render() {
		let state = this.props.state.appReducer
		let liststate = this.props.state.listReducer.products
		let productionListArr = []

		return (
			<div id="content">
				<TopBar title="首页" recordBtn />
				<p className="info">请录入您的信息</p>
				<p className="input-line">
					<span>销售金额：</span>
					<input
						type="text"
						placeholder="请输入订单金额"
						value={state.formData.moneyCount}
						onChange={e => {
							this.props.changeMoney(e.target.value)
						}}
					/>
				</p>
				<p className="input-line">
					<span>客户姓名：</span>
					<input
						type="text"
						placeholder="请输入客户姓名"
						value={state.formData.userName}
						onChange={e => {
							this.props.changeName(e.target.value)
						}}
					/>
				</p>
				<p className="input-line">
					<span>客户电话：</span>
					<input
						type="text"
						placeholder="请输入客户电话"
						value={state.formData.userTel}
						onChange={e => {
							this.props.changeTel(e.target.value)
						}}
					/>
				</p>
				<p className="info">请选择销售的产品</p>
				<Link to="/production" exact className="production-line">
					{liststate.length > 0 &&
						liststate.map((item, index) => {
							if (item.isSlect && item.count > 0) {
								productionListArr.push(item)
							}
						})}
					{productionListArr.length > 0 ? (
						<ul>
							{productionListArr.map((obj, index) => {
								return (
									<li key={index}>
										{obj.name}*{obj.count}
									</li>
								)
							})}
						</ul>
					) : (
						'选择产品'
					)}
				</Link>
				<p className="info">请上传发票凭证</p>
				<div className="picUpload">
					<div className="box">
						<span>{state.ticket.name}</span>
						<input
							type="file"
							onChange={e => {
								this.props.changeImg(e.target.files[0])
							}}
						/>
					</div>
					<p className="uploadImgbox">
						<img src={state.ticket.surl} className="uploadImg" />
					</p>
				</div>
				<div
					className="submitBtn"
					onClick={this.handlesubmitClick}
				>
					提交
				</div>
				<AlertBox
					title={state.alertBox.title}
					isshow={state.alertBox.isshow}
					closeFun={this.alertFun}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	state: state
})

const mapDispatchToProps = dispatch => ({
	changeMoney: bindActionCreators(actions.changeMoney, dispatch),
	//changeMoney: num => dispatch(actions.changeMoney(num)),
	changeName: bindActionCreators(actions.changeName, dispatch),
	changeTel: bindActionCreators(actions.changeTel, dispatch),
	changeImg: bindActionCreators(actions.changeImg, dispatch),
	alertBox: bindActionCreators(actions.alertBox, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
