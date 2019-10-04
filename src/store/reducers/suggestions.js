import {
  ADD_ITEM,
  CLEAR_SUGGESTIONS,
  LOAD_SUGGESTIONS_BEGIN,
  MAYBE_UPDATE_SUGGESTIONS,
  UPDATE_INPUT_VALUE,
}                 from '../actions/actionTypes'
const initialState = {
  value: '',
  suggestions: [],
  isLoading: false
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        value : '',
      }
    case CLEAR_SUGGESTIONS:
      return {
        ...state,
        suggestions: [],
      }
    case LOAD_SUGGESTIONS_BEGIN:
      return {
        ...state,
        isLoading: true
      }
    case MAYBE_UPDATE_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.suggestions,
        isLoading: false
      }
    case UPDATE_INPUT_VALUE:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}
export default reducer
