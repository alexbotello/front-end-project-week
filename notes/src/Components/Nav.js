import React, { Component } from 'react';
import { connect } from 'react-redux';

import Select from './Select';
import Search from './Search';
import Export from './Export';

class Nav extends Component {
  render() {
    return(
      <div>
        <Select />
        <Search query={this.props.query}/>
        <Export notes={this.props.notes} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    notes: state.notes,
    query: state.query,
  }
}
export default connect(mapStateToProps, {})(Nav);