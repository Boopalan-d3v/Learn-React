import { Person } from './Person';
import React from 'react'
import { people } from '../../../data';
const List = () => {
  return (
    <div>
        <h1>Hello there</h1>
        {people.map( person => {
          console.log(person);          
          return < Person key={person.id} {...person}/>
        })}        
    </div>
  )
}
export default List 