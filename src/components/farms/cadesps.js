import React, {Component} from 'react';
import { timingSafeEqual } from 'crypto';

const Cadesp = ({cadesps}) => {
    return (
        <div>
            <div className='header'>
                <h3 class='title'>Cadesp's:</h3>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Fazenda</th>
                        <th>N° Nirf</th>
                        <th>N° CCIR</th>
                        <th>Hectares Nirf</th>
                        <th>Hectares CCIR</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cadesps.map( (cadesp) => (
                             <tr>
                                 <td>{cadesp.farm}</td>
                                 <td>{cadesp.nirf}</td>
                                 <td>{cadesp.ccir}</td>
                                 <td>{cadesp.hectar_nirf}</td>
                                 <td>{cadesp.hectar_ccir}</td>

                             </tr>
                         ) )
                    }
                </tbody>
            </table>
        </div>
    )
}

class Cadesps extends Component{
    state = {
        cadesps: []
    }
    componentDidUpdate() {
        if(this.state.cadesps.length ==0)
        {
            fetch('http://localhost:8000/api/cadesp/?farm='+this.props.farm)
            .then(res => res.json())
            .then((data) => { this.setState({cadesps: data}); console.log(data) } )
            .catch('error')
        }
    }
    render(){
        return (
            <Cadesp cadesps={this.state.cadesps} />
        )
    }
}
export default Cadesps