import { FETCHING, SUCCESS, ERROR, REDIRECTING, TOGGLE, QUERY, FILTER } from '../Actions';
const initialState = {
  notes: [],
  redirect: false,
  fetching: false,
  toggle: false,
  query: '',
  error: null,
}

export default (state=initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return {...state, fetching: true, redirect: false}
    case TOGGLE:
      return {...state, toggle: !state.toggle}
    case REDIRECTING:
      return {...state, redirect: true}
    case SUCCESS:
      return {...state, fetching: false, notes: action.notes}
    case ERROR:
      return {...state, fetching: false, error: action.error}
    case QUERY:
      return {...state, query: action.payload}
    case FILTER:
      return {...state, notes: state.notes.filter(note => note.title.toLowerCase().indexOf(state.query) !== -1), query: ''}
    default:
      return state;
  }
}
