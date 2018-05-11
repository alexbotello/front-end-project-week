import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getNotes } from '../Actions';
import Nav from './Nav';
import Card from './Card';


class Main extends Component {
  componentDidMount() {
    this.props.getNotes();
  }
  render() {
    const { notes } = this.props;
    return (
      <div className="flex-container">
        <div className="title">
          <h2>Your Notes:</h2>
          <Nav />
        </div>
        <ul className="notes-list">
          {notes.map((note, i) => {
            return(
              <Link key={i} to={`note/${note.id}`} className="note-card">
                <Card note={note} />
              </Link>
            );
          })}
        </ul>  
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}
export default connect(mapStateToProps, {getNotes})(Main);