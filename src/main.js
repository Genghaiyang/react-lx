import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from "react-router-dom"
import {Provider} from 'react-redux'
import {store} from './store/store'
import './assets/index.less'
//import './assets/index.css'
import App from './component/App'
ReactDOM.render(

    <HashRouter><App/></HashRouter>
,
document.getElementById('app'))













