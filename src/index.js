import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import FarmerDetail from './components/farmers/farmer_detail';
import Farmers from './components/farmers/farmers.js';
import Farms from './components/farmers/farms';
import Agriculturals from './components/farmers/agriculturals';
const routing = (
    <Router>
        <div>
            <Route exact path='/produtores' component={Farmers}/>
            <Route path='/produtores/:id' component={FarmerDetail}/>
            <Route path='/produtores/:id' component={Farms}/>
            <Route path='/produtores/:id' component={Agriculturals}/>
            
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
