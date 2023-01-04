import { useState, useReducer, useRef, useEffect } from 'react';
import Modal from './Modal'
import { reducer } from './reducer'

const defaultState = {
  people: [{ id: 1, name: 'John' },
  { id: 2, name: 'Paul' },
  { id: 3, name: 'George' },
  { id: 4, name: 'Ringo' }],
  isModalOpen: false,
  modalMessage: ''
}

function App() {
  const [name, setName] = useState('')


  const [state, dispatch] = useReducer(reducer, defaultState)

  const refContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newPerson = {
        id: new Date().getTime().toString(),
        name
      }
      dispatch({ type: 'ADD_PERSON', payload: newPerson })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }
  useEffect(() => {
    refContainer.current.focus()
  })


  return (
    <div className="container">
      {state.isModalOpen && <Modal modalMessage={state.modalMessage} closeModal={closeModal} />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} ref={refContainer} />
        </div>
        <button type="submit" className="btn">Add Person</button>
      </form>
      {state.people.map(person => {
        return (
          <div className="item" key={person.id}>
            <h4>{person.name}</h4>
            <button className="delete-btn" onClick={() => dispatch({ type: 'REMOVE_PERSON', payload: person.id })}>Delete</button>
          </div>
        )
      })}
    </div>


  );
}

export default App;
