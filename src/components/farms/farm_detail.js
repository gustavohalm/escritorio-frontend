import React, {Component} from 'react';
import FarmerDetail from '../farmers/farmer_detail';
import { cloneNode } from '@babel/types';
const Farm_Detail = ({farm}) => {
        return (
            <div className='card'>
                <h3>{farm.name} - CNPJ {farm.cnpj}</h3> <br/>
                <p>NIRF:{farm.nirf} </p>
                <p>CCIR:{farm.ccir} </p>                  
                <br/>
                <h5>Cadesp's:</h5>
<br/>                
                <h5>Sócios:</h5>

            </div>
        )
};
class FarmDetail extends Component{
    state = {
        farm: []
    }
    componentDidMount()
    {
        var farm_id = this.props.match.params.id;
        fetch("http://localhost:8000/api/farm/"+farm_id)
        .then(res => res.json())
        .then( (data) => { this.setState({farm: data}); console.log(data) } )
        .catch(console.log)
    }
    render(){
        return(
            <Farm_Detail farm={this.state.farm}/>
        )
    }
}

export default FarmDetail