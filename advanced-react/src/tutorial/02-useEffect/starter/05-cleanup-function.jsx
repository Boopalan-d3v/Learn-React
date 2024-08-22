import { useEffect, useState } from "react";
const CleanupFunction = () => {

  const [toggle, setToggle] = useState(false)
  console.log('hey, There !');
  
  return <div>
    <h2>cleanup function</h2>
    <button className="btn" onClick={() => {setToggle(!toggle)}}>Toggle</button>
    {toggle && <SecondComponent />}
  </div>;
};

const SecondComponent = () => {
  useEffect(() => {
    const intId = setInterval(() => {
      //console.log('Wooofh !');
    } , 1000)
    return() => {
      clearInterval(intId)
      console.log('cleanup')
    }   
  }, [])

  return <><h3>hello, Techie</h3></>
}
export default CleanupFunction;
