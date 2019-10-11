import React, {Component} from 'react';
const Farm = ({farms}) => {
    return (
        
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>CNPJ</th>
                    <th>NIRF</th>
                    <th>CCIR</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
            {
                farms.map( (farm) => (
                    <tr>
                        <td> {farm.name}</td>
                        <td> {farm.cnpj}</td>
                        <td> {farm.nirf}</td>
                        <td> {farm.ccir}</td>
                        <td> <a href={"/fazendas/"+farm.id}> <button className='btn btn-info'>DETALHES</button> </a> </td>

                    </tr>
                ))
            }
            </tbody>

        </table>
    )
}
class Farms extends Component{
    state = {
        farms : []
    }
    render() {
        return (
            <Farm farms={this.state.farms}/>
        )
    }
}