import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css' ;

const Booklist = () => {
  return (<section className='bookList'>
    <Book/>
    <Book/>
    <Book/>
    </section>
  )
}

const Book = () => {
    return(
        <article className='book'>
        <Image/>
        <Title/>
        <Author/>
        </article>
    )
}


const Image =() => <img src='https://images-eu.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL900_SR900,600_.jpg' alt='Homemaid-secret'/>

const Title = () => <h4> Rich Dad and Poor Dad</h4>

const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.5rem'}}> Robert.T Kiyosaki</h4> 

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Booklist/>)