import React, { Component } from 'react';

export default class SortDropdown extends Component {
  state = {
    value: 'id'
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
    if (this.state.value === 'length') {
      this.props.sort(this.sortByLength());
    }
  }
  sortByLength = () => {
    this.props.notes.sort((a, b) => {
      return b.value - a.value;
    })
  }
  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option selected value='id'>sort by ID</option>
        <option value="title">sort by Title</option>
        <option value="length">sort by length</option>
      </select>
    );
  }
}