import axios from 'axios';

export const TOGGLE = 'TOGGLE';
export const FETCHING = 'FETCHING';
export const REDIRECTING = 'REDIRECTING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const QUERY = 'QUERY';
export const FILTER = 'FILTER';
export const SORT = 'SORT';
export const ADDED = 'ADDED'

// https://lambda-notes-alex.herokuapp.com/api/notes

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING })
    axios.get('https://lambda-notes-alex.herokuapp.com/api/notes')
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
    axios.post('https://lambda-notes-alex.herokuapp.com/api/notes', note)
      .then(response => {
        dispatch({ type: SUCCESS, notes: response.data}) // notes: response.data => was inside dispatch
      })
      .catch(err => {
        dispatch({ type: ERROR, error: 'Cannot Add New Note' })
      });
  }
}
export const updateNote = note => {
  return dispatch => {
    dispatch({ type: REDIRECTING });
    axios.put(`https://lambda-notes-alex.herokuapp.com/api/notes/${note.id}`, note)
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
      axios.delete(`https://lambda-notes-alex.herokuapp.com/api/notes/${note._id}`, note)
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
  return dispatch => {
    dispatch({ type: QUERY, payload: query})
    dispatch({ type: FILTER })
  }
}
export const sortBySelect = select => {
  return dispatch => {
    dispatch({ type: SORT, payload: select });
  }
}