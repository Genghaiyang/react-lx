import React from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import TopBar from './TopBar'
import RecordList from '../component/RecordList'
import '../assets/record.less'
class Record extends React.Component {
	/* constructor(props){
        super(props);
        this.handleSlectClick = this.handleSlectClick.bind(this)
    }  */

	render() {
		/* const state = this.props.state.products
		const isSlectTrue = 'slect-active'
		const isSlectFalse = 'slect-active-no'
	    const {TootleSlect,PlusNumCount,AddNumCount} = this.props */

		return (
			<div id="record">
				<TopBar title="记录" />
				<nav className='navLine'>
					<NavLink
						to="/record/passed"
						exact
						activeClassName="activeNav"
					>已通过</NavLink>
					<NavLink
						to="/record/audited"
						exact
						activeClassName="activeNav"
					>待审核</NavLink>
					<NavLink
						to="/record/failed"
						exact
						activeClassName="activeNav"
					>未通过</NavLink>
					{/* <Redirect to='/passed'/> */}
				</nav>
				<Switch>
					<Route
						path={`${this.props.match.path}/:type`}
						component={RecordList}
					/>
					<Redirect
						from={`${this.props.match.path}`}
						to={`${this.props.match.path}/passed`}
						exact
						component={RecordList}
					/>
				</Switch>
			</div>
		)
	}
}
/* const mapStateToProps = state => ({
	state: state.listReducer
})
const mapDispatchToProps = dispatch => ({
	// TootleSlect: bindActionCreators(actions.TootleSlect, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(Record) */
export default Record