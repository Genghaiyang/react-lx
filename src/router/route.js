import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import App from '../component/App'
import Production from '../component/Production'
import Helpcenter from '../component/Helpcenter'
import Balance from '../component/Balance'
import Record from '../component/record'
class RouteConfig extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path="/" exact component={App} />
					<Route path="/production" exact component={Production} />
					<Route path="/helpcenter" component={Helpcenter} />
					<Route path="/record" component={Record} />
                    <Route path="/balance" component={Balance} />
					<Redirect to="/" />
				</Switch>
			</HashRouter>
		)
	}
}
export default RouteConfig
