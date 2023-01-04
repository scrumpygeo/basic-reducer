export const reducer = (state, action) => {
  if (action.type === 'ADD_PERSON') {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalMessage: "New Person Added"
    }
  }
  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalMessage: 'Please enter a name' }
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false }
  }

  return {
    ...state
  }
  // default if none of above matches
  throw new Error('no matching action type')
}