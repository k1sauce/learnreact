import React, { useState } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';


const App = props => {

  const [personsState, setPersonsState] = useState([
      { id: "ads1", name: "apple", age: 5},
      { id: "gggs2", name: "banana", age: 54},
      { id: "dadss3", name: "orange", age: 544},
      { id: "dssd4", name: "celery", age: 5444}
    ]);

  const [showPersons, setShowPersons] = useState(
    {show: false}
    )

  const [showCockpit, setShowCockpit] = useState(
    {show: true}
  )

  const nameChangedHandler = (event, id) => {

    const personIndex = personsState.findIndex(p => {
      return p.id === id;
    });

    console.log(personIndex)

    const person = {...personsState[personIndex]};

    person.name = event.target.value

    const persons = [...personsState]
    
    persons[personIndex] = person;

    setPersonsState([...persons])
  }

  const deletePersonHandler = (personIndex) => {
    const mutatePersonState = [...personsState]
    mutatePersonState.splice(personIndex, 1)
    setPersonsState([...mutatePersonState])
    console.log(mutatePersonState)
  }

  const togglePersonsHandler = () => {
    const show = showPersons.show
    setShowPersons(
      {show: !show}
    )
  }

  let persons = null;

  if (showPersons.show) {
    persons = (
        <Persons 
          persons={personsState}
          clicked={deletePersonHandler}
          changed={nameChangedHandler}
        />
    )
  }

  return (
      <WithClass classes={classes.App}>
        <button 
          onClick={() => {
            setShowCockpit({ show: false });
          }} 
        >
          Remove Cockpit
        </button>
        {showCockpit.show ? (
          <Cockpit 
            showPersons={showPersons.show}
            persons={personsState}
            clicked={togglePersonsHandler}
          />
        ) : null}  
        {persons}
      </WithClass>
  );
}

export default App;
