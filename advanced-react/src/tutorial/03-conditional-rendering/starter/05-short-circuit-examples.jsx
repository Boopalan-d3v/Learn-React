import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  return <>
    <h2>short circuit - examples</h2>
    <h2>{text || user.name}</h2>
    {/*!text && (<div>
      <h2>whatever</h2>
      <h2>{name}</h2>
    </div>) */}

    {/* user && <SomeComponent name={user.name} /> */}
    
    <h2>Ternary operator</h2>
    <button className='btn'>{!isEditing?'Hello':'world'}</button>
    {user ? (<h1>hello , {user.name}</h1> ): (<h1>You need to login</h1>)}
    </>;
};

const SomeComponent = ({name}) => {
  return <>
    <h3>Returned value</h3>
    <h3>{name}</h3></>
}

export default ShortCircuitExamples;

