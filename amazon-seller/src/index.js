import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css' ;

const author = 'Robert.T Kiyosaki'
const book = 'Rich Dad and Poor Dad'
const img = 'https://images-eu.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL900_SR900,600_.jpg'

const Booklist = () => {
  return (<section className='bookList'>
    <Book/>
    <Book/>
    <Book/>
    </section>
  )
}

const Book = () => {

const styleHeading = {color:'#617d98', fontSize:'0.75rem', marginTop:'0.5rem'}
    return(
        <article className='book'>
          <img src={img} alt={book}/>
          <h4>{book }</h4>
          <h4 style={styleHeading}> {author}</h4>  
        </article>
    )
}
 
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Booklist/>)