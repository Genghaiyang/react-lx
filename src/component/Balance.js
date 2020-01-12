import React from 'react'
import TopBar from './TopBar'
import AlertBox from '../component/AlertBox'
import '../assets/balance.less'
class Balance extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			valueNum: '0.00',
			allMoney: '100',
			title: '',
			isshow: false
		}
	}
	alertFun(e) {
		return () => {
			this.setState({
				isshow: false
			})
		}
	}
	handleChange(e) {
		// console.log(e.target.value)
		let num = e.target.value
		num > 200
			? this.setState({ valueNum: '200.00' })
			: this.setState({ valueNum: num })
	}
	checkInpnt() {
		let alertTips = ''
		if (!this.state.valueNum || parseFloat(this.state.valueNum) == 0) {
			alertTips = '请输入提现金额！'
		} else if (
			parseInt(this.state.valueNum) > parseInt(this.state.allMoney)
		) {
			alertTips = '申请提现金额不能大于余额!'
		} else {
			alertTips = '提现成功！'
		}
		this.setState({
			isshow: true,
			title: alertTips
		})
	}

	render() {
		return (
			<div id="balancePage">
				<TopBar title="提现" recordBtn />
				<p className="titles">
					您的可提现金额为：¥ {this.state.allMoney}
				</p>
				<div className="money-box">
					<p className="text">请输入提现金额（元）</p>
					<p className="box">
						<span>¥</span>
						<input
							type="text"
							onChange={this.handleChange.bind(this)}
							value={this.state.valueNum}
							maxLength="5"
						/>
					</p>
				</div>
				<p className="submitbtn" onClick={this.checkInpnt.bind(this)}>
					申请提现
				</p>
				<AlertBox
					title={this.state.title}
					isshow={this.state.isshow}
					closeFun={this.alertFun.bind(this)}
				/>
			</div>
		)
	}
}
export default Balance
