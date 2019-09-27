import React, {Component} from 'react';

const Farmer = ({ farmers }) => {

  return(
    <table className='table'>
      <thead>
        <tr>
          <th> <span className='table-title'> Nome</span></th>
          <th> <span className='table-title'> Cpf</span></th>
          <th> <span className='table-title'>Ação</span></th>

        </tr>
      </thead>
      <tbody>
        { farmers.map( (farmer) => (
          <tr>
              <td>{farmer.name}</td>
              <td>{farmer.cpf}</td>
              <td> <a href="/produtores/{farmer.id}"> <button className='btn btn-info'>DETALHES</button> </a> </td>
          </tr>
        ) ) }
      </tbody>
    </table>
  )
};
class Farmers extends Component{

  state = {
    farmers: []
  }
  componentDidMount() {
    fetch('http://localhost:8000/api/farmer')
    .then(res => res.json() )
    .then( (data) => { this.setState({farmers: data})  } )
    .catch(console.log)
  }

  render(){
    console.log(this.state.farmers)
    return(

      <Farmer  farmers={this.state.farmers} />  
    )
  }
}

export default Farmers