import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateQuery } from '../Actions';

class SearchBar extends Component {
  state = {
    query: '',
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.retrieve(this.state.query.toLowerCase());
  }
  render() {
    return (
      <div className="search-box">
        <input 
          name="query"
          placeholder="Search for note.."
          onChange={this.handleChange}
          value={this.state.query}/>
      </div>
    );
  }
}
export default connect(null, {updateQuery})(SearchBar);
