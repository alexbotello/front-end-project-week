import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import axios from 'axios';

import { addNote } from '../Actions';
import Form from './Form';

class Create extends Component {
  render() {
    let items = {
      button: 'Add Note',
      action: this.props.addNote,
    }
    return(
      <div className="flex-container">
        {this.props.redirect 
          ? <Redirect to="/" />
          : <div className="flex-container">
              <div className="title">
                <h2>Create New Note:</h2>
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
    redirect: state.redirect
  }
}

export default connect(mapStateToProps, {addNote})(Create);