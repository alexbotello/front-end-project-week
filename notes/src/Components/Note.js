import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import axios from 'axios';

import { toggle } from '../Actions';
import Modal from './Modal';


class Note extends Component {
  state = {
    note: {},
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:5005/note/${id}`)
      .then(response => this.setState({ note: response.data, id}))
      .catch(error => console.log(error));
  }
  render() {
    const { note, id } = this.state;
    const { toggleModal } = this.props;
    note.id = id;
    return (
      <div className="flex-container">
        {this.props.redirect 
          ? <Redirect to='/'/>
          : <div className="flex-container"> 
              {toggleModal ? <Modal note={note}/> : null}
              <div className="title">
                <ReactMarkdown source={note.title} />
              </div>
              <div className="content">
                <ReactMarkdown source={note.content}/>
              </div>
              <div className="icons">
                <Link to={{pathname: '/edit', state: note }}>
                  <i className="far fa-edit fa-lg icon"></i>
                </Link>
                <div onClick={() => this.props.toggle()}>
                  <i className="far fa-trash-alt fa-lg icon"></i>
                </div>
              </div>
            </div>
        }
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    redirect: state.redirect,
    toggleModal: state.toggle,
  }
}
export default connect(mapStateToProps, { toggle })(Note);