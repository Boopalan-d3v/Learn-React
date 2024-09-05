import React, { /*useState , */ useReducer} from 'react';
import { data, people } from '../../../data';

const Actions = {clearALL:'CLEAR_ALL', restore:'RESTORE', removeItem:'REMOVE_ITEM'}

const ReducerBasics = () => {
  const defaultData = {
    people:data,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case Actions.restore:
        return{...state, people:data}
      case Actions.removeItem:
        let newData = state.people.filter((person) => person.id !== action.payload.id)
        return{...state, people:newData}
      case Actions.clearALL:
        return{...state, people:[]}
    }

  }

   const [state, dispatch] = useReducer(reducer,defaultData)


  //const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    dispatch({type: Actions.removeItem, payload: {id}})
    //let newPeople = people.filter((person) => person.id !== id);
    //setPeople(newPeople);
  };

  const clearAll = () => {
    dispatch({type:Actions.clearALL})
    //setPeople([])
  }

  const restoreItem = () => {
    dispatch({type: Actions.restore})
    //setPeople (data)
  }
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
      </button></>) : (<><button className='btn' style={{ marginTop: '2rem' }} onClick={restoreItem}>
        Restore items
      </button></>)}
      
    </div>
  );
};

export default ReducerBasics;
