import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/header.less'
class TopBar extends React.Component {
	constructor(props) {
		super(props)
		//this.handleClicknav = this.handleClicknav.bind(this);
		this.state = {
			isShow: false
		}
	}
	handleClicknav = () => {
		this.state.isShow
			? this.animateDely()
			: this.setState({ isShow: !this.state.isShow })
	}
	animateDely = () => {
		/* document
            .getElementById('navPage') 
            this.refs.aside.setAttribute('class', 'navPage navPage-hide')*/
            this.refs.aside.className = 'navPage navPage-hide'
		window.setTimeout(() => {
			this.setState({ isShow: !this.state.isShow })
		}, 500)
	}
	render() {
		return (
			<header className="head-bar">
				<p className="head-nav-btn" onClick={this.handleClicknav}></p>
				<span>{this.props.title}</span>
				{this.props.recordBtn && (
					<Link to="/record" className="head-record-btn"></Link>
				)}
				{this.props.confirmBtn && (
					<Link to="/" className="head-ok-btn">
						确定
					</Link>
				)}
				{this.state.isShow && (
					<aside id="navPage" ref="aside" className="navPage navPage-show">
						<Link to="/123" replace exact className="link-line">
							首页
						</Link>
						<Link to="/balance" exact className="link-line">
							提现
						</Link>
						<Link to="/helpCenter" exact className="link-line">
							帮助中心
						</Link>
					</aside>
				)}
			</header>
		)
	}
}
export default TopBar
