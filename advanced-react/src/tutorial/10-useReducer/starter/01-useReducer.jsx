import React, { useState, useReducer } from 'react';
import { data } from '../../../data';
import {CLEAR_LIST , RESET_LIST, REMOVE_ITEM} from './actions'
import reducerFunc from './reducer';

const ReducerBasics = () => {
  //const [people, setPeople] = useState(data);

  const defaultState = {
    people:data,
    isLoading:false
  }

  const [state, dispatch] = useReducer(reducerFunc, defaultState)

  const removeItem = (id) => {
    dispatch({type: REMOVE_ITEM, payload : {id}})
    //let newPeople = people.filter((person) => person.id !== id);
    //setPeople(newPeople);
  };

  const clearAll = () =>{
    dispatch({type: CLEAR_LIST})
    //setPeople([])
  }

  const restoreItems = () => {
    //setPeople(data)
    dispatch({type: RESET_LIST})
  }
  console.log(state);  
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length ? (<><button className='btn' style={{ marginTop: '2rem' }} onClick={clearAll}>
        clear items
      </button></>) : (<><button className='btn' style={{ marginTop: '2rem' }} onClick={restoreItems}>
        Restore items
      </button></>)}
      
    </div>
  );
};

export default ReducerBasics;
