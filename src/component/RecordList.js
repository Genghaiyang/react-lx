import React from 'react'
import '../assets/recordlist.less'
class RecordList extends React.Component {
	constructor(props) {
		super(props)
		//this.handleClicknav = this.handleClicknav.bind(this);
		this.state = {
			recordData: []
		}
	}
	getListData = type => {
		let urls = 'http://api.cangdu.org/shopro/data/record/' + type
		fetch(urls)
			.then(response => response.json())
			.then(json => {
				this.setState({
					recordData: json.data.data
				})
			})
			.catch(e => {
				console.log('服务器报错' + e)
			})
	}
	componentDidMount() {
		let listType = this.props.match.params.type
		this.getListData(listType)
	}
	componentWillReceiveProps(nextProps) {
		let typeNow = this.props.match.params.type
		let typeNext = nextProps.match.params.type
		typeNow != typeNext && this.getListData(typeNext)
	}

	render() {
		return (
			<div id="recordList">
				<div className="listbox">
					<ul>
						{this.state.recordData.map((item, index) => {
							return (
								<li key={item.sales_id}>
									<p className="topline">
										<span>创建时间：{item.created_at}</span>
										<b>{item.type_name}</b>
									</p>
									<p className="p1">
										<span>用户名：</span>
										{item.customers_name} &emsp;{' '}
										{item.customers_phone}
									</p>
									<p className="p1">
										<span>商&emsp;品：</span>
										{item.product[0].product_name}
									</p>

									<p className="p1">
										<span>金&emsp;额：</span>
										{item.sales_money} &emsp; 佣金：
										{item.commission}
									</p>
									<p className="text">
										等待管理员审核，审核通过后，佣金将结算至账户
									</p>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		)
	}
}
export default RecordList
