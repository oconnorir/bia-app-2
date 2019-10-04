import {
  ADD_ITEM,
  CANCEL_EDIT,
  EDIT_SWITCH,
  INITIALIZE_LOCAL_STORAGE,
  REMOVE_ITEM,
  SUBMIT_EDIT,
  UPDATE_EDIT_INPUT_VALUE,
}                 from './actionTypes'

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
// ^^^^^^^^^^^^^^ ADD ITEM TO LIST ^^^^^^^^^^^^^^ //
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
export const addItemHandler = (value) => {
  return {
    type : ADD_ITEM,
    value,
  }
}

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
// ^^^^^^^^^^^^^^^^^ CANCEL EDIT ^^^^^^^^^^^^^^^^ //
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
export const cancelEdit = () => {
  return {
    type : CANCEL_EDIT,
  }
}

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
// ^^^^^^^^^^^^^^^^^ EDIT SWITCH ^^^^^^^^^^^^^^^^ //
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
export const editSwitchAction = (item) => {
  return {
    type : EDIT_SWITCH,
    item,
  }
}

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
// ^^^^^^^^^^ INITIALIZE LOCAL STORAGE ^^^^^^^^^^ //
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
export const initializeLocalStorage = (list) => {
  return {
    type : INITIALIZE_LOCAL_STORAGE,
    list,
  }
}

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
// ^^^^^^^^^^^^ REMOVE ITEM FROM LIST ^^^^^^^^^^^ //
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
export const removeItem = (item) => {
  return {
    type : REMOVE_ITEM,
    item,
  }
}

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
// ^^^^^^^^^^^^^^^^^ SUBMIT EDIT ^^^^^^^^^^^^^^^^ //
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
export const submitEdit = (item, idx, value) => {
  return {
    type : SUBMIT_EDIT,
    item,
    idx,
    value,
  }
}

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
// ^^^^^^^^^^^^^^ UPDATE EDIT INPUT ^^^^^^^^^^^^^ //
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
export const updateEditInputValue = (value) => {
  return {
    type: UPDATE_EDIT_INPUT_VALUE,
    value
  }
}
