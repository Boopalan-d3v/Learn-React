import {useState} from 'react'

const UseStateBasics = () => {
  //console.log(useState('bob'))
  //const value = useState('hello')[0]
  //const value = useState('world')[1]
  // console.log(value)
  // console.log(func)

  let [count, setCount] = useState(0)

  let handleClick = () => {
    setCount(count = count + 1)
  }

  return (<>
    <h4>You Clicked {count} times</h4>
    <button className='btn' onClick={handleClick}>Increament</button>
    </>);
};

export default UseStateBasics;
