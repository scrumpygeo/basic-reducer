import { useState, useReducer } from 'react';
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
  return (
    <div className="container">
      {state.isModalOpen && <Modal />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit" className="btn">Add Person</button>
      </form>
      {state.people.map(person => {
        return (
          <div className="item" key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </div>


  );
}

export default App;
