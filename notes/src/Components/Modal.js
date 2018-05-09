import React from 'react';
import { connect } from 'react-redux';

import { toggle, deleteNote } from '../Actions';
import Button from './Button';

const Modal = props => {
  const items = {
    styles: {'backgroundColor': 'red'},
    text: 'No',
    clickButton: props.toggle,
  }
  return(
    <div className="modal">
      <p>Are you sure you want to delete this?</p>
      <div className="modal-container">
        <div className="modal-button">
          <Button {...items}/>
        </div>
        <div className="modal-button">
          <button className="button" onClick={() => props.deleteNote(props.note)}>
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}
export default connect(null, { toggle, deleteNote })(Modal);
