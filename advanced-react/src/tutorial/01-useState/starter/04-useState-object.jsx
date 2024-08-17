import React from "react";
import { peopleHobby } from "../../../data";
import { useState } from "react";

const UseStateObject = () => {

  const [name, setName] = useState('Ashi')
  const [age, setAge] = useState(27)
  const [hobby, setHobby] = useState('Dancing')
    
  const showDetails = () =>{
    setName('Lallu')
    setAge(23)
    setHobby('Gardening')
  }

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
