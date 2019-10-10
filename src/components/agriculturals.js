import React, {Component} from 'react';

const Agricultural = ({agriculturals}) => {
    return (
        
        <table className='table'>
            <thead>
                <tr>
                    <th> Nome </th>
                    <th> CNPJ </th>
                </tr>
            </thead>
            <tbody>
                {
                    agriculturals.map( (partnership) => (
                        <tr>
                            <td> {partnership.agricultural.name} </td>
                            <td> {partnership.agricultural.cnpj} </td>
                        </tr>
                    ) )
                }
            </tbody>
        </table>
    )
};

class Agriculturals extends Component{
    state = {
        agriculturals : []
    }
    componentDidMount(){
        var farmer_id = this.props.match.params.id;
        fetch("http://localhost:8000/api/partnership-agricultural/?farmer="+farmer_id )
        .then(res => res.json())
        .then( (data) => {this.setState({agriculturals: data}); console.log(data); } )
        .catch(console.log)
    }

    render(){
        return(
            <Agricultural agriculturals={this.state.agriculturals} />
        );
    }

}

export default Agriculturals