export const reducer = (state, action) => {
  if (action.type === 'ADD_PERSON') {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalMessage: "New person added"
    }
  }
  if (action.type === 'REMOVE_PERSON') {
    const newPeople = state.people.filter(person => person.id !== action.payload)
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalMessage: 'Person removed'
    }
  }
  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalMessage: 'Please enter a name' }
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false }
  }
  // default if none of above matches
  throw new Error('no matching action type')
}