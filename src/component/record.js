import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TopBar from './TopBar'
import actions from '../actions/actions'
import '../assets/record.less'
class Record extends React.Component {
	/* constructor(props){
        super(props);
        this.handleSlectClick = this.handleSlectClick.bind(this)
    }  */

	handleSlectClick(id){
		this.props.TootleSlect(id)
	}
	handlePlusClick(id) {
		this.props.state.products[id].count > 0 && this.props.PlusNumCount(id)

	}
	handleAddClick(id) {
		this.props.AddNumCount(id)
	}

	render() {
		const state = this.props.state.products
		const isSlectTrue = 'slect-active'
		const isSlectFalse = 'slect-active-no'
        // const {TootleSlect,PlusNumCount,AddNumCount} = this.props

		return (
			<div id="production-layer">
				<TopBar title="首页" confirmBtn />
				<ul>
					{state.map((item, index) => {
						return (
							<li key={index} data-order={index}>
								<i
									className={
										item.isSlect
											? isSlectTrue
											: isSlectFalse
									}
									onClick={this.handleSlectClick.bind(this,index)}
								></i>
								<span className="name">{item.name}</span>
								<p className="btn-r-box">
									<i
										onClick={this.handlePlusClick.bind(this,index)}
									>
										-
									</i>
									<b>{item.count}</b>
									<i
										onClick={this.handleAddClick.bind(this,index)}
									>
										+
									</i>
								</p>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}
const mapStateToProps = state => ({
	state: state.listReducer
})
const mapDispatchToProps = dispatch => ({
	TootleSlect: bindActionCreators(actions.TootleSlect, dispatch),
	AddNumCount: bindActionCreators(actions.AddNumCount, dispatch),
	PlusNumCount: bindActionCreators(actions.PlusNumCount, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Record)
