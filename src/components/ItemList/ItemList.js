import React, {Component} from 'react'
import {connect}          from 'react-redux'
import Autosuggest        from 'react-autosuggest'
import {
  Dimmer,
  Icon,
  Loader,
}                         from 'semantic-ui-react'
import Button             from '../Button/Button'
import Input              from '../Input/Input'
import ListItem           from '../ListItem/ListItem'
import {
  clearSuggestions,
  loadSuggestions,
  updateInputValue,
}                         from '../../store/actions/suggestions'
import {
  addItemHandler,
  cancelEdit,
  editSwitchAction,
  initializeLocalStorage,
  removeItem,
  submitEdit,
  updateEditInputValue,
}                         from '../../store/actions/items'
import './ItemList.css'
class ItemList extends Component {
  state = {}
  submitHandler = (e, value) => {
    e.preventDefault()
    if (value) {
      this.props.addItemHandler(value)
    }
  }
  componentDidMount () {
    const loc = window.localStorage
    let local_list = loc.local_list
    if (local_list) {
      this.props.initializeLocalStorage(JSON.parse(local_list))
    } else {
      console.warn('SORRY, NO LIST IN LOCAL STORAGE')
    }
  }
  render () {
    // CALLED WHEN SUGGESTION IS SELECTED
    function getSuggestionValue (suggestion) {
      return suggestion.ITEM
    }
    // CALLED WHEN INPUT CHANGES
    function renderSuggestion (suggestion) {
      return (
        <span>{suggestion.ITEM}</span>
      )
    }
    const {
      cancelEdit,
      editSwitch,
      grocery_list,
      item_to_edit,
      item_value,
      onEditChange,
      onSuggestionsClearRequested,
      onSuggestionsFetchRequested,
      removeItemHandler,
      submitNewEdit,
      suggestions,
    } = this.props
    const editInputProps = {
      placeholder : '',
      value : item_value,
      onChange : onEditChange,
    }
    return (
      <ul className='itemList'>
        {grocery_list.map((item, idx) => {
          return (
            <ListItem
              key={idx}>
              <div className={idx % 2 !== 0 ? 'even item' : 'odd item'}>
                <div className='pillAlignment'>
                  {
                    item_to_edit !== item ?
                      !item ?
                      <Dimmer
                        inverted
                        active >
                        <Loader />
                      </Dimmer>
                      :
                      <div
                        className='editSwitch'
                        onClick={() => editSwitch(item)}>
                        <Input
                          className='pointer'
                          value={item}
                          placeholder={item} />
                        <div className='removeItem'>
                          <Button
                            clicked={() => removeItemHandler(item)}>
                            <Icon
                              name='trash'
                              bordered={false}
                              color={idx % 2 !== 0 ? 'pink' : 'teal'}/>
                          </Button>
                        </div>

                      </div>
                      :
                      <div className='itemEdit item'>
                        <Autosuggest
                          id={item}
                          suggestions={suggestions}
                          alwaysRenderSuggestions={true}
                          highlightFirstSuggestion={true}
                          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                          onSuggestionsClearRequested={onSuggestionsClearRequested}
                          getSuggestionValue={getSuggestionValue}
                          renderSuggestion={renderSuggestion}
                          inputProps={editInputProps} />
                        <div className='editBlock'>
                          <Button
                            clicked={() => submitNewEdit(item, idx, editInputProps.value)}>
                            <Icon
                              name='checkmark'
                              color='green' />
                          </Button>
                          <Button
                            clicked={() => cancelEdit(item, idx, editInputProps.value)}>
                            <Icon
                              name='close'
                              color='black' />
                          </Button>
                        </div>
                      </div>
                  }
                </div>
              </div>
            </ListItem>
          )
        })}
      </ul>
    )
  }
}
const mapStateToProps = (state) => ({
  grocery_item      : state.items.grocery_item,
  grocery_list      : state.items.grocery_list,
  isLoading         : state.suggestions.isLoading,
  item_to_edit      : state.items.item_to_edit,
  item_value        : state.items.item_value,
  suggestions       : state.suggestions.suggestions,
  temp_item         : state.items.temp_item,
  value             : state.suggestions.value,
})
const mapDispatchToProps = (dispatch) => ({
  addItemHandler              : (suggestion_value)      => dispatch(addItemHandler(suggestion_value)),
  cancelEdit                  : ()                      => dispatch(cancelEdit()),
  editSwitch                  : (item)                  => dispatch(editSwitchAction(item)),
  initializeLocalStorage      : (local_list)            => dispatch(initializeLocalStorage(local_list)),
  onChange                    : (event, {newValue})     => dispatch(updateInputValue(newValue)),
  onEditChange                : (event, {newValue})     => dispatch(updateEditInputValue(newValue)),
  onSuggestionsClearRequested : ()                      => dispatch(clearSuggestions()),
  onSuggestionsFetchRequested : ({value})               => dispatch(loadSuggestions(value)),
  removeItemHandler           : (item)                  => dispatch(removeItem(item)),
  submitNewEdit               : (item, idx, value)      => dispatch(submitEdit(item, idx, value)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
