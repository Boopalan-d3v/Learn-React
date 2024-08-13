import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css' ;

const books = [{
  id:1,
  author:'Robert.T Kiyosaki' ,
  title:'Rich Dad and Poor Dad' ,
  img:'https://images-eu.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL900_SR900,600_.jpg'
}, {
  id:2,
  author :'The Housemaid', 
  title:'Freida McFadden', 
  img: 'https://images-na.ssl-images-amazon.com/images/I/81AHTyq2wVL._AC_UL900_SR900,600_.jpg' 
}, {
  id:3,
  author:'James Clear', 
  title:'Atomic Habits', 
  img:'https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL900_SR900,600_.jpg'
} ]

const Booklist = () => {
  return(
  <section className='bookList'>
    {books.map((books) => { 
  return(<Book {...books} key= {books.id}/> ) })}
  </section>)}


const Book = (props) => {

const {author, title, img} = props
console.log(props)
const styleHeading = {color:'#617d98', fontSize:'0.75rem', marginTop:'0.5rem'}
    return(
        <article className='book'>
          <img src={img} alt={title}/>
          <h4>{title}</h4>
          <h4 style={styleHeading}> {author}</h4>  
          <button id='btn' >Click Me</button>
        </article>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Booklist/>)

