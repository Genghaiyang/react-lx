import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import { AppContainer } from 'react-hot-loader'
import './assets/index.less'
//import './assets/index.css'
import Route  from './router/route'
const render = Component =>{
        
    ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
          <Component/>
      </AppContainer>
    </Provider>,
    document.getElementById('app'))

}
render(Route)


// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./router/route', () => {
        render(Route);
    })
}














