import React, {Component} from 'react';

const Farm = ({farms}) => {
    return (
        <table className='table'>
        <thead>
          <tr>
            <th> <span className='table-title'> NOME</span></th>
            <th> <span className='table-title'> CNPJ</span></th>
            <th> <span className='table-title'> NIRF</span></th>
            <th> <span className='table-title'> CCIR</span></th>
            <th> <span className='table-title'> PORCENTAGEM</span></th>
            <th> <span className='table-title'> </span></th>
          </tr>
        </thead>
        <tbody>
          { farms.map( (partnership) => (
            <tr>
                <td>{partnership.farm.name}</td>
                <td>{partnership.farm.cnpj}</td>
                <td>{partnership.farm.nirf}</td>
                <td>{partnership.farm.ccir}</td>
                <td>{partnership.percent}%</td>

                <td> <a href="/produtores/{farmer.id}"> <button className='btn btn-info'>DETALHES</button> </a> </td>
            </tr>
          ) ) }
        </tbody>
      </table>
    )
};

class Farms extends Component{
    state = {
        farms: []
    }
    componentDidMount() {
        var farmer_id = this.props.match.params.id;
        fetch('http://localhost:8000/api/partnership-farm/?farmer='+farmer_id)
        .then(res => res.json() )
        .then( (data) => { this.setState({farms: data}); console.log(data) ;} )
        .catch(console.log)
      }
    
    render(){
        return ( 
           <Farm  farms={this.state.farms}/>
        );
    }

}

export default Farms