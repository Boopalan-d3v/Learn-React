import React, { useState , useReducer} from 'react';
import { data } from '../../../data';
const ReducerBasics = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "ClearAll":
        
        break;
    
      default:
        break;
    }

  }

   const [state, dispatch] = useReducer(reducer,data)


  //const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearAll = () => {
    //setPeople([])
  }

  const restoreItem = () => {
    //setPeople (data)
  }
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {people.length ? (<><button className='btn' style={{ marginTop: '2rem' }} onClick={clearAll}>
        clear items
      </button></>) : (<><button className='btn' style={{ marginTop: '2rem' }} onClick={restoreItem}>
        Restore items
      </button></>)}
      
    </div>
  );
};

export default ReducerBasics;
