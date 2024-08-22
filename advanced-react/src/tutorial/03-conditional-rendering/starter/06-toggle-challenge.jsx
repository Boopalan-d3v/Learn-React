import {useState} from 'react'

const ToggleChallenge = () => {

const [showAlert , setShowAlert] = useState(false)

/*const handleClick = () => {
  if(showAlert){
    setShowAlert(false)
    return;
  }
  setShowAlert(true)
} */

  return<>
   <h2>toggle challenge</h2>
   <button className='btn' onClick={()=>{setShowAlert(!showAlert)}}>Hello</button>
   {showAlert && <Alert />}
   </>;
};

const Alert = () => {
  return <div className='alert alert-danger'>Hello world</div>
}

export default ToggleChallenge;
