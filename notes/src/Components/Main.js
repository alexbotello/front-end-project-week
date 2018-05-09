import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getNotes } from '../Actions';
import SearchBar from './SearchBar';
import Export from './Export';
import Card from './Card';


class Main extends Component {
  state = {
    query: '',
  }
  componentDidMount() {
    this.props.getNotes();
  }
  retrieveQuery = query => {
    this.setState({ query });
  }
  render() {
    let { query } = this.state;
    let { notes } = this.props;
    notes = notes.filter(note => {
      return note.title.toLowerCase().indexOf(query) > -1;
    });
    return (
      <div className="flex-container">
        <div className="title">
          <h2>Your Notes:</h2>
          <SearchBar retrieve={this.retrieveQuery}/>
          <Export/>
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