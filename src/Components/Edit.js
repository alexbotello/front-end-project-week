import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { updateNote } from '../Actions';
import Form from './Form';

class Edit extends Component {
  render() {
    let items = {
      button: 'Update Note',
      action: this.props.updateNote,
      note: this.props.location.state,
    }
    return (
      <div className="flex-container">
        {this.props.redirect
          ? <Redirect to='/'/>
          : <div className="flex-container">
              <div className="title">
                <h2>Edit Note:</h2>
              </div>
              <Form {...items} />
            </div>
        }
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    redirect: state.redirect,
  }
}
export default connect(mapStateToProps, {updateNote})(Edit);