import { useState} from 'react'

const UseStateGotcha = () => {
    const [value, setValue] = useState(0)

    const handleClick = () => {
      setTimeout(() => {
        console.log("button clicked")
        setValue((currentValue) => {
          const newState = currentValue + 1
          return newState
        })
      }, 3000)
      
      //console.log(value)
    }

    return(<> 
    <h2>useState "gotcha"</h2>
    <h2>{value}</h2>
    <button onClick={handleClick} className='btn'>Increment</button>
  </>)
};

export default UseStateGotcha;
