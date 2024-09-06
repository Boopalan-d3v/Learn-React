import { useState, useCallback } from 'react';
import { data } from '../../../../data';
import List from './List';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const removeItem = useCallback((id) => {
    let newPeople = people.filter((person) => person.id != id)
    setPeople(newPeople)
  },[people]) 

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removeItem={removeItem}/>
    </section>
  );
};
export default LowerState;
