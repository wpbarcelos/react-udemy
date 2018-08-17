import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { add, changeDescription, search } from './todoActions';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(e) {
    const { add, search, description } = this.props;
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description);
    } else if (e.key === 'Escape') {
      this.props.handleClear();
    }
  }
  componentWillMount() {
    this.props.search();
  }
  render() {
    const { add, search, description } = this.props;

    return (
      <div role="form" className="todoForm">
        <Grid cols="10 9 10 10">
          <input
            type="text"
            id="description"
            className="form-control"
            onKeyUp={this.keyHandler}
            value={this.props.description}
            onChange={this.props.changeDescription}
          />
        </Grid>

        <Grid cols="2 3 2 2">
          <IconButton
            classe="primary"
            icon="plus"
            onClick={() => add(description)}
          >
            Salvar
          </IconButton>
          <IconButton classe="default" icon="search" onClick={() => search()}>
            Buscar
          </IconButton>
          <IconButton
            classe="default"
            icon="remove-sign"
            onClick={this.props.handleClear}
          >
            Limpar
          </IconButton>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({ description: state.todo.description });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, search, add }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
