import {CLEAR_LIST , RESET_LIST, REMOVE_ITEM} from './actions'
import { data } from '../../../data';

const reducerFunc =(state, action) => {
    if( action.type == CLEAR_LIST){
      return {...state, people:[] }
    }
    if(action.type == RESET_LIST){
      return {...state, people: data}
    }
    if(action.type == REMOVE_ITEM){
      let newData = state.people.filter((person) => person.id !== action.payload.id)
      return {...state, people: newData}
    }
    //return state
    throw new Error(`NO Matching "${action.type}" - action type`);
    
  }

  export default reducerFunc