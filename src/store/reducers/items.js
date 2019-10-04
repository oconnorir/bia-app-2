import {
  ADD_ITEM,
  CANCEL_EDIT,
  INITIALIZE_LOCAL_STORAGE,
  EDIT_SWITCH,
  REMOVE_ITEM,
  SUBMIT_EDIT,
  UPDATE_EDIT_INPUT_VALUE,
}                 from '../actions/actionTypes'

const initialState = {
  grocery_item  : '',
  grocery_list  : [],
  item_to_edit  : null,
  suggestions   : [],
  temp_item     : '',
  item_value    : '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const addLoc = window.localStorage
      const addGroceryList = [...state.grocery_list]
      const addIdx = addGroceryList.indexOf(action.value)
      if (addIdx > -1) {
        console.warn('SORRY, THIS ITEM IS ALREADY ON YOUR LIST!!!')
      } else if (action.value) {
          addGroceryList.push(action.value)
      }
      addLoc.setItem('local_list', JSON.stringify(addGroceryList))
      return {
        ...state,
        grocery_list : addGroceryList,
        grocery_item : action.value,
      }
    case CANCEL_EDIT:
      const cancelList = {...state}
      cancelList.item_to_edit = null
      return {
        ...state,
        item_to_edit : cancelList.item_to_edit,
      }
    case EDIT_SWITCH:
      return {
        ...state,
        temp_item : action.item,
        item_to_edit : action.item,
        item_value: action.item,
      }
    case INITIALIZE_LOCAL_STORAGE:
      let localStorageList = {...state.grocery_list}
      localStorageList = action.list
      return {
        ...state,
        grocery_list: localStorageList,
      }
    case REMOVE_ITEM:
      const removalGroceryList = [...state.grocery_list]
      const removalIdx = removalGroceryList.indexOf(action.item)
      removalGroceryList.splice(removalIdx, 1)

      let remStore = window.localStorage
      let removalLoc = JSON.parse(window.localStorage.local_list)
      removalLoc.splice(removalIdx, 1)
      removalLoc = JSON.stringify(removalLoc)
      remStore.setItem('local_list', removalLoc)
      return {
        ...state,
        grocery_list : removalGroceryList,
      }
    case SUBMIT_EDIT:
      const submitList = {...state}
      const submitIdx = submitList.grocery_list.indexOf(action.item)
      submitList.grocery_list.splice(submitIdx, 1, action.value)
      submitList.temp_item = ''
      submitList.item_to_edit = null

      let subStore = window.localStorage
      let submitLoc = JSON.parse(window.localStorage.local_list)

      submitLoc.splice(submitIdx, 1, action.value)
      submitLoc = JSON.stringify(submitLoc)

      subStore.setItem('local_list', submitLoc)
      return {
        ...state,
        grocery_list : submitList.grocery_list,
        temp_item : submitList.temp_item,
        item_to_edit : submitList.item_to_edit,
      }
    case UPDATE_EDIT_INPUT_VALUE:
      return {
        ...state,
        item_value: action.value,
      }
    default:
      return state
  }
}

export default reducer
