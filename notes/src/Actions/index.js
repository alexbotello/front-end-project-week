import axios from 'axios';

export const TOGGLE = 'TOGGLE';
export const FETCHING = 'FETCHING';
export const REDIRECTING = 'REDIRECTING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const QUERY = 'QUERY';



export const getNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING })
    axios.get('http://localhost:5005/notes')
      .then(response => {
        dispatch({ type: SUCCESS, notes: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, error: 'No Notes Found On Server'})
      });
  }
}
export const addNote = note => {
  return dispatch => {
    dispatch({ type: REDIRECTING })
    axios.post('http://localhost:5005/notes', note)
      .then(response => {
        dispatch({ type: SUCCESS, notes: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, error: 'Cannot Add New Note' })
      });
  }
}
export const updateNote = note => {
  return dispatch => {
    dispatch({ type: REDIRECTING });
    axios.put(`http://localhost:5005/note/${note.id}`, note)
      .then(response => {
        dispatch({ type: SUCCESS, notes: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, error: 'Cannot Update Note' })
      });
  }
}
export const deleteNote = note => {
    return dispatch => {
      dispatch(toggle());
      dispatch({ type: REDIRECTING });
      axios.delete(`http://localhost:5005/note/${note.id}`, note)
        .then(response => {
          dispatch({ type: SUCCESS, notes: response.data })
        })
        .catch(err => {
          dispatch({ type: ERROR, error: 'Cannot Delete Note'})
        });
    }
}
export const toggle = () => {
  return {
    type: TOGGLE,
  }
}
export const updateQuery = query => {
  return {
    type: QUERY,
    payload: query,
  }
}