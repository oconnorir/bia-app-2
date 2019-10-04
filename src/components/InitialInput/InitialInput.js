import React, {Component} from 'react'
import {connect}          from 'react-redux'
import Autosuggest        from 'react-autosuggest'
import {
  Dimmer,
  Icon,
  Loader,
}                         from 'semantic-ui-react'
import Button             from '../Button/Button'
import {
  clearSuggestions,
  loadSuggestions,
  updateInputValue,
}                         from '../../store/actions/suggestions'
import {
  addItemHandler,
}                         from '../../store/actions/items'
import './InitialInput.css'
class InitialInput extends Component {
  state = {}
  submitHandler = (e, value) => {
    e.preventDefault()
    if (value) {
      this.props.addItemHandler(value)
    }
  }
  render () {
    // CALLED WHEN INITIAL INPUT CHANGES
    function renderSuggestion (suggestion) {
      return (
        <span>{suggestion.ITEM}</span>
      )
    }
    // CALLED WHEN SUGGESTION IS SELECTED
    function getSuggestionValue (suggestion) {
      return suggestion.ITEM
    }
    const {
      addItemHandler,
      isLoading,
      onChange,
      onSuggestionsClearRequested,
      onSuggestionsFetchRequested,
      suggestions,
      value,
    } = this.props
    const inputProps = {
      onChange,
      placeholder : 'New item...',
      value,
    }
    return (
      <div className="initialInput_container">
          {
            isLoading ?
              <Dimmer
                inverted
                active >
                <Loader />
              </Dimmer>
              :
              null
          }
          <form onSubmit={(e) => {this.submitHandler(e, value)}} className="form">
            <Autosuggest
                  id='initial'
                  className='form__field'
                  suggestions={suggestions}
                  highlightFirstSuggestion={true}
                  onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps} />
            <Button
              className={suggestions ? 'btn btn--primary btn--inside uppercase loading' : 'btn btn--primary btn--inside uppercase'}
              clicked={() => addItemHandler(value)}>
              <Icon
                className='initialInput_container__icon'
                name='add' />
            </Button>
          </form>
        </div>
    )
  }
}
const mapStateToProps = (state) => ({
  isLoading         : state.suggestions.isLoading,
  suggestions       : state.suggestions.suggestions,
  value             : state.suggestions.value,
})
const mapDispatchToProps = (dispatch) => ({
  addItemHandler              : (suggestion_value)      => dispatch(addItemHandler(suggestion_value)),
  onChange                    : (event, {newValue})     => dispatch(updateInputValue(newValue)),
  onSuggestionsClearRequested : ()                      => dispatch(clearSuggestions()),
  onSuggestionsFetchRequested : ({value})               => dispatch(loadSuggestions(value)),
})
export default connect(mapStateToProps, mapDispatchToProps)(InitialInput)
