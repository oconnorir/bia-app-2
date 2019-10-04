import {
  HOST_DEV,
  HOST_PROD,
}                 from '../../config/apiconfig'
import {
  UPDATE_INPUT_VALUE,
  CLEAR_SUGGESTIONS,
  MAYBE_UPDATE_SUGGESTIONS,
  LOAD_SUGGESTIONS_BEGIN,
}                 from './actionTypes'
const HOST = process.env.NODE_ENV === 'production'
  ? HOST_PROD
  : HOST_DEV
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
// ^^^^^^^^^ REGEX UTILITY ^^^^^^^^^ //
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
export const loadSuggestions = (value) => {
  return dispatch => {
    dispatch(loadSuggestionsBegin())

      fetch(`${HOST}/items`)
        .catch(err => {
          console.error(`ERROR :\n${err}`)
        })
      .then(response => response.json())
      .then(data => {
        const escapedValue = escapeRegexCharacters(value.trim());
        const regex = new RegExp('^' + escapedValue, 'i');
        const suggestionArray = data.filter(sug => regex.test(sug.ITEM));
          dispatch(maybeUpdateSuggestions(suggestionArray, value))
      })
  }
}
export const updateInputValue = (value) => {
  return {
    type: UPDATE_INPUT_VALUE,
    value
  }
}
export const clearSuggestions = () => {
  return {
    type: CLEAR_SUGGESTIONS
  }
}
export const loadSuggestionsBegin = () => {
  return {
    type: LOAD_SUGGESTIONS_BEGIN
  }
}
export const maybeUpdateSuggestions = (suggestions, value) => {
  return {
    type: MAYBE_UPDATE_SUGGESTIONS,
    suggestions,
    value
  }
}
