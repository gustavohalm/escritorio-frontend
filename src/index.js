import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import FarmerDetail from './components/farmers/farmer_detail';
import FarmDetail from './components/farms/farm_detail'
import Farmers from './components/farmers/farmers.js';

const routing = (
    <Router>
        <div>
            <Route exact path='/produtores' component={Farmers}/>
           
            <Route path='/produtores/:id' component={FarmerDetail}/>

            <Route path='/fazendas/:id' component={FarmDetail}/> 
           
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
