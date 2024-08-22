import { useState} from 'react'

const UserChallenge = () => {

  const [user, setUser] = useState (null)
  
  const logIn = () => {
    setUser({name:'ashi'})
  }

  const logOut = () => {
    setUser(null)
  }

  return<>
    <h2>user challenge</h2>
    {user? (<div><h1>hello there, {user.name}</h1>
    <button className='btn' onClick={logOut}> Log Out</button></div>) : (<div><h1>Please Log In</h1>
    <button className='btn' onClick={logIn}>Log in</button></div>)}
    </>;
};

export default UserChallenge;
