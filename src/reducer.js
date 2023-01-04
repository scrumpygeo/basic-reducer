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

  return {
    ...state
  }
}