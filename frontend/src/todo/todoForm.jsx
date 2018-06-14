import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'


export default props => (
    <div role="form" className="todoForm">
        <Grid cols="10 9 10 10">
            <input 
                type="text" 
                id="description" 
                className="form-control"
                value={props.description}
                onChange={props.handleChange}></input>
       </Grid>

        <Grid cols="2 3 2 2">
            <IconButton classe="primary" icon="plus" 
                onClick={props.handleAdd}>Salvar</IconButton>
            <IconButton classe="default" icon="search" 
                onClick={props.handleSearch }>Buscar</IconButton>
        </Grid>
    </div>
)