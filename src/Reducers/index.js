import { FETCHING, SUCCESS, ERROR, REDIRECTING, TOGGLE, QUERY, FILTER, SORT, ADDED } from '../Actions';
const initialState = {
  notes: [],
  redirect: false,
  fetching: false,
  toggle: false,
  query: '',
  select: '',
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
    case ADDED:
      return {...state, fetching: false }
    case ERROR:
      return {...state, fetching: false, error: action.error}
    case QUERY:
      return {...state, query: action.payload}
    case FILTER:
      return {...state, notes: state.notes.filter(note => note.title.toLowerCase().indexOf(state.query) !== -1)}
    case SORT:
      return {...state, select: action.payload, notes: state.notes.sort(compare)}
    default:
      return state;
  }
}

const compare = (a, b) => {
  if (a < b) return -1;
  else if (a > b) return 1;
  return 0;
}
