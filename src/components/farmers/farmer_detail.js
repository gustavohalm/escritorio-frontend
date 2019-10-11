import React, {Component} from 'react';


const Farmer_detail = ({ farmer }) => {

    return(
        <div>
            <h4>Nome: {farmer.name} | CPF:{farmer.cpf}</h4> <br/>

            <h3>Fazendas:</h3>
        
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
        .then( (data) => { this.setState({farmer: data})  } )
        .catch(console.log)
      }
    render() {
        return (
                <Farmer_detail farmer={this.state.farmer}/>
            )
    }
}

export default FarmerDetail