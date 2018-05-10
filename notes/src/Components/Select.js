import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sortBySelect } from '../Actions';

class Select extends Component {
  state = {
    value: '',
  }
  handleChange = event => {
    event.persist();
    // this.setState({value: event.target.value});
    this.setState(prevState => {
      prevState.value = event.target.value;
      this.props.sortBySelect(prevState.value);
      return prevState;
    })
  }
  render() {
    return(
      <select className="select" value={this.state.value} onChange={this.handleChange}>
        <option value="id">Sort By ID</option>
        <option value="title">Sort By Title</option>
        <option value="length">Sort By Length</option>        
      </select>
    )
  }
}
const mapStateToProps = state => {
  return {
    value: state.select,
  }
}
export default connect(mapStateToProps, { sortBySelect })(Select);