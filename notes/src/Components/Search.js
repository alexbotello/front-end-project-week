import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateQuery } from '../Actions';

class Search extends Component {
  state = {
    query: '',
  }
  handleChange = event => {
    event.persist();
    this.setState(prevState => {
      prevState.query = event.target.value;
      this.props.updateQuery(prevState.query.toLowerCase());
      return prevState;
    });
  }
  render() {
    return (
      <div className="search-box">
        <input 
          name="query"
          placeholder="Search for note.."
          onChange={this.handleChange}
          value={this.props.query}/>
      </div>
    );
  }
}
export default connect(null, { updateQuery })(Search);