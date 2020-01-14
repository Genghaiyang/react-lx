import React from 'react'
import TopBar from './TopBar'
import '../assets/help.less'
/* class Helpcenter extends React.Component {
	render() {
		return (
			<div id="help-center">
				<TopBar title="帮助中心" recordBtn />
				<h2 className="text-line">介绍</h2>
				<p className="info-line">
					本项目主要用于理解 react 和 redux 的编译方式，以及 react +
					redux 之间的配合方式
				</p>
			</div>
		)
	}
} */
//编写无状态组件
const Helpcenter = () =>{
    return (
        <div id="help-center">
				<TopBar title="帮助中心" recordBtn />
				<h2 className="text-line">介绍</h2>
				<p className="info-line">
					本项目主要用于理解 react 和 redux 的编译方式，以及 react +
					redux 之间的配合方式
				</p>
			</div>
    )
}
export default Helpcenter
