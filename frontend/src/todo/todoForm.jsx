import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'


export default props => (
    <div role="form" className="todoForm">
        <Grid cols="12 9 10 11">
            <input 
                type="text" 
                id="description" 
                className="form-control"
                value={props.description}
                onChange={props.handleChange}></input>
       </Grid>

        <Grid cols="12 3 2 1">
            <IconButton classe="primary" icon="plus"
                onClick={props.handleAdd}>Salvar</IconButton>
        </Grid>
    </div>
)