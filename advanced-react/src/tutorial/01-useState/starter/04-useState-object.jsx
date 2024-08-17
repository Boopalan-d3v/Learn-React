import React from "react";
import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'Ashi',
    age:23,
    hobby:'Gardening'
  })
  
    
  const showDetails = () =>{
    setPerson({...person , hobby:'Dancing'})
  }
  const { name, age, hobby} = person
  return( 
    <>
      <h2>useState object example</h2>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{`Enjoy's ${hobby}`}</h2>
      <button onClick={showDetails}>Show lallu</button>
    </>);

};
export default UseStateObject;
