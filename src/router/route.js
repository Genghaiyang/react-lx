import React from 'react'
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import App from '../component/App'
import Production from '../component/Production'
class RouteConfig extends React.Component{
    
    render(){
        return(
            <HashRouter>               
                 <Switch>
                  <Route path="/" exact component={App} />
                  <Route path="/production" exact component={Production} />
                  
                   {/*<Route path="/helpcenter" component={helpcenter} />
                     <Route path="/record" component={record} />
                    <Route path="/balance" component={balance} />*/}
                   <Redirect to="/" />
                </Switch>
            </HashRouter>
        )
    }
}
export default RouteConfig