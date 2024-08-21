import { useEffect, useState} from 'react'

const url = 'https://api.github.com/users';


const FetchData = () => {

  const [user, setUser] =   useState([])

  useEffect ( () =>{
    const fetchData = async() => {

      try {
        const response = await fetch(url);
        const users = await response.json();
        setUser(users)
      } catch (error) {
        console.log(error);
        
      }
      
    }
    fetchData()
  }, [])
  return <section>
    <h2>Github Users</h2>
    <ul className="users">
      {user.map(data => {
        const { id, login, avatar_url, html_url} = data
        return <li key={id}>
          <img src={avatar_url} alt={login} />
          <div>
            <h5>{login}</h5>
            <a href={html_url} >profile</a>
          </div>
        </li>
      })}
    </ul>
  
  </section>;
};
export default FetchData;
