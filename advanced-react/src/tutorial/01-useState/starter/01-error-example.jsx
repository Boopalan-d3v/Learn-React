const ErrorExample = () => {
  let count = 0
  
  const handleClick = () => {
    count +=1 
    console.log(count)
 
  }

  return (
    <>
      <h2 id='ivalue'></h2>
      <button onClick={handleClick} className='btn'>Increment</button>
    </>);
};

export default ErrorExample;
