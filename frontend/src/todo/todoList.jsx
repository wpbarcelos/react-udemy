import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

const TodoList = props => {

    const renderRows = () => {

        const list = props.list || []

        return (
            list.map(l => (
                <tr key={l._id}>
                    <td className={l.done ? 'markAsDone' : ''}>{l.description}</td>
                    <td>
                        <IconButton classe="success" icon="check"
                            onClick={() => props.handleMarkAsDone(l)} hide={l.done}></IconButton>

                        <IconButton classe="warning" icon="remove"
                            onClick={() => props.handleMarkAsPending(l)} hide={!l.done} ></IconButton>

                        <IconButton classe="danger" icon="trash"
                            onClick={() => props.handleRemove(l)} hide={!l.done}></IconButton></td>

                </tr>
            ))
        )
    }



    return (
        <table className="table">

            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>

                </tr>

            </thead>
            <tbody>
                {renderRows()}

            </tbody>
        </table>

    )

}

const mapStateToProps = state => ({ list: state.todo.list })

export default connect(mapStateToProps)(TodoList)