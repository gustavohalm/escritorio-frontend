import React, {Component} from 'react';
import Agriculturals from '../farmers/agriculturals';

const Partnership = ({partnerships}) => {
    return(
        <div>
            <div class='header'>
                 <h4 class='title'>Sócios:</h4>
            </div>
        <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th> CNPJ/CPF </th>
                        <th> Porcentagem</th>
                        <th> </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        partnerships.map( (partnership) => (
                            <tr>
                               {console.log(partnerships)}
                                <td> { partnership.farmer ? partnership.farmer.name : partnership.agricultural.name } </td>
                                <td> { partnership.farmer ? partnership.farmer.cpf : partnership.agricultural.cnpf } </td>

                                <td>{partnership.percent}%</td>
                                <td></td>
                            </tr>     
                        ) )
                    }
                </tbody>
        </table>
        </div>
    )
};
class Partnerships extends Component{
    state = {
        partnerships: []
    }
    componentDidUpdate()
    {
        if ( this.state.partnerships.length == 0){
            
            fetch('http://localhost:8000/api/partnership-farm/?farm='+ this.props.farm)
            .then(res => res.json())
            .then((data) => { this.setState({partnerships: data}); console.log(data) })
            .catch(console.log( 'ero'));
        }
    }
    render(){
        console.log(this.props);

        return(
            <Partnership partnerships={this.state.partnerships}/>
        )
    }
}
export default Partnerships