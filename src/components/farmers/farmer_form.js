import React, {Component} from 'react';

class FarmerForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        fetch('http://localhost:8000/api/farmer/', {
          method: 'POST',
          body: data,
        });
        window.location.reload();

    }
    render(){
        return(
                <div>

                    <form onSubmit={this.handleSubmit}>
        
                        <table className='table'> 
                            <tbody>
                                <tr>
                                    <td >
                                        <input type='text' name='name' className="form-control" placeholder='Nome do Produtor'/>                 
                                    </td>
                                    <td>
                                        <input type='text' name='cpf' className="form-control " placeholder='CPF do Produtor'/>
                                    </td>
                                    <td>
                                        <input type='submit' value='Adicionar' className='btn btn-primary'/>
                                    </td>
                                </tr>
                            </tbody>    
                        
                        </table>
                    
                    </form>  
                </div>
        )
    }
}
export default FarmerForm