import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TopBar from './TopBar'
import actions from '../actions/actions'
import '../assets/production.less'
class Production extends React.Component {
	/* constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }  */

	handleSlectClick(id) {
		this.props.TootleSlect(id)
		// console.log(e.target.parentNode.getAttribute('data-order'))
	}
	handlePlusClick(id) {
		this.props.state.products[id].count > 0 && this.props.PlusNumCount(id)
		// console.log(e.target.parentNode.getAttribute('data-order'))
	}
	handleAddClick(id) {
		this.props.AddNumCount(id)
		// console.log(e.target.parentNode.getAttribute('data-order'))
	}

	render() {
		const state = this.props.state.products
		const isSlectTrue = 'slect-active'
		const isSlectFalse = 'slect-active-no'
		console.log()
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
									onClick={this.handleSlectClick.bind(
										this,
										index
									)}
								></i>
								<span className="name">{item.name}</span>
								<p className="btn-r-box">
									<i
										onClick={this.handlePlusClick.bind(
											this,
											index
										)}
									>
										-
									</i>
									<b>{item.count}</b>
									<i
										onClick={this.handleAddClick.bind(
											this,
											index
										)}
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
export default connect(mapStateToProps, mapDispatchToProps)(Production)
