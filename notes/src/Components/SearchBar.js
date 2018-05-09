import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateQuery } from '../Actions';

class SearchBar extends Component {
  state = {
    query: '',
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }, this.props.updateQuery(event.target.value));
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
const mapStateToProps = state => {
  return {
    query: state.query,
  }
}
export default connect(mapStateToProps, {updateQuery})(SearchBar);
