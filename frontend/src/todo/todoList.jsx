import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    
    const renderRows = () =>{

        const list = props.list || []

        return(
            list.map( l => (
                <tr key={l._id}>
                    <td>{l.description}</td>
                    <td> <IconButton classe="danger" icon="trash" 
                        onClick={ () => props.handleRemove(l)} ></IconButton></td>

                </tr>
            ))
        )
    }
    
    
    
    return (
        <table className="table">

            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                    
                </tr>
                
            </thead>
            <tbody>
                    {renderRows()}

            </tbody>
        </table>

    )  

}