import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return <>
    <h2>short circuit - examples</h2>
    <h2>{text || user.name}</h2>
    {/*!text && (<div>
      <h2>whatever</h2>
      <h2>{name}</h2>
    </div>) */}
    {user && <SomeComponent name={user.name} />}
    </>;
};

const SomeComponent = ({name}) => {
  return <>
    <h3>Returned value</h3>
    <h3>{name}</h3></>
}


export default ShortCircuitExamples;

