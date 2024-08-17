import { data } from "../../../data";
import React from 'react'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const clearItem = (id) => {
    const newPeople = people.filter((people) => people.id !== id)
    setPeople(newPeople)
  }
  const clearAllItems = () => {
    setPeople([])
  }


  return(
    <>
      {people.map((person) => {
        const {id, name} = person
        console.log(person);
        
        return(<>
          <h4 key={id}>{name}</h4>
          <button className="btn" onClick={() => clearItem(id)}>Clear Item</button>
          </>)
      })}
      
     
     <button className='btn' onClick={clearAllItems} style={{marginTop:'2rem'}}>Clear all Items</button>
    </>);
};

export default UseStateArray;
