import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const data = async() => {
      try {
        const response = await fetch(url)
        if(!response.ok){
          setIsError(true)
          setIsLoading(false)
          return;
        }
        const users = await response.json()
        setUser(users)
      } catch (error) {
        setIsError(true)
        console.log(error); 
      }
      setIsLoading(false)
    }
    data()
  }, [])

  if(isLoading){
    return <h1>Loading ...</h1>
  }
if(isError){
  return <h1>There was an error !</h1>
}

  const {avatar_url, name, company, bio} = user
  return(<>
    <h2>Fetch Data </h2>
    <section>
      <img style={{width:'150px', borderRadius:'25px'}} src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <h3>Works At {company}</h3>
      <h4>{bio}</h4>    
    </section></>);
};

export default MultipleReturnsFetchData;
