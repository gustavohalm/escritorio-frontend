import React, {Component} from 'react';
import Farms from './farms';
import Agriculturals from './agriculturals'
import { jsxClosingElement } from '@babel/types';

const Farmer_detail = ({ farmer }) => {

    return(
        <div>
            <h4>Nome: {farmer.name} | CPF:{farmer.cpf}</h4> <br/>
            {console.log(farmer.id)}
            <Farms farmer={farmer.id} />
        </div>
    )
  };

class FarmerDetail extends Component{
    state = {
        farmer: []
    }
    componentDidMount() {
        var farmer_id = this.props.match.params.id;
        fetch('http://localhost:8000/api/farmer/' + farmer_id)
        .then(res => res.json() )
        .then( (data) => { this.setState({farmer: data}) } )
        .catch(console.log)
      }
    render() {
        return (
               // <Farmer_detail farmer={this.state.farmer}/>
            
        <div>
            <h4>Nome: {this.state.farmer.name} | CPF:{this.state.farmer.cpf}</h4> <br/>
            {console.log("Parameter: " + this.state.farmer.id)}
            <Farms   farmer={ this.state.farmer } />
            <Agriculturals farmer={ this.state.farmer }/>
        </div>
        )
    }
}

export default FarmerDetail