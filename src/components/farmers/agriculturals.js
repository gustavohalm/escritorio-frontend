import React, {Component} from 'react';

const Agricultural = ({agriculturals}) => {
    return (
       <div> 
           <div>
               <h3 className='header'> Agricolas: </h3>
           </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th> Nome </th>
                        <th> CNPJ </th>
                        <th> PORCENTAGEM </th>
                        <th> <span className='table-title'> </span></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        agriculturals.map( (partnership) => (
                            <tr>
                                <td> {partnership.agricultural.name} </td>
                                <td> {partnership.agricultural.cnpj} </td>
                                <td> {partnership.percent}% </td>

                                <td> <a href="/agricola/ link "> <button className='btn btn-info'>DETALHES</button> </a> </td>

                            </tr>
                        ) )
                    }
                </tbody>
            </table>
        </div>
    )
};

class Agriculturals extends Component{
    state = {
        agriculturals : []
    }
    componentDidUpdate(){
        if(this.state.agriculturals.length == 0 )
        {
            fetch("http://localhost:8000/api/partnership-agricultural/?farmer="+this.props.farmer.id )
            .then(res => res.json())
            .then( (data) => {this.setState({agriculturals: data}); console.log(data); } )
            .catch(console.log)
        
        }
    }

    render(){
        return(
            <Agricultural agriculturals={this.state.agriculturals} />
        );
    }

}

export default Agriculturals