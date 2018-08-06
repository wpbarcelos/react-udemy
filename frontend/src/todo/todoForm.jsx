import React from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { changeDescription } from './todoActions'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'


const TodoForm = props => {

    const keyHandler = (e) => {

        if (e.key === "Enter") {
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        } else if (e.key === "Escape") {
            props.handleClear();
        }
    }

    return (
        <div role="form" className="todoForm">
            <Grid cols="10 9 10 10">
                <input
                    type="text"
                    id="description"
                    className="form-control"
                    onKeyUp={keyHandler}
                    value={props.description}
                    onChange={props.changeDescription}></input>
            </Grid>

            <Grid cols="2 3 2 2">
                <IconButton classe="primary" icon="plus"
                    onClick={props.handleAdd}>Salvar</IconButton>
                <IconButton classe="default" icon="search"
                    onClick={props.handleSearch}>Buscar</IconButton>
                <IconButton classe="default" icon="remove-sign"
                    onClick={props.handleClear}>Limpar</IconButton>
            </Grid>
        </div>
    )
}


const mapStateToProps = state => ({ description: state.todo.description })

const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)