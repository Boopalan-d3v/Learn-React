import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css' ;

const books = [{author:'Robert.T Kiyosaki' ,
  bookTitle:'Rich Dad and Poor Dad' ,
  img:'https://images-eu.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL900_SR900,600_.jpg'
}, {
  author :'The Housemaid', 
  bookTitle:'Freida McFadden', 
  img: 'https://images-na.ssl-images-amazon.com/images/I/81AHTyq2wVL._AC_UL900_SR900,600_.jpg' 
}, {
  author:'James Clear', 
  bookTitle:'Atomic Habits', 
  img:'https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL900_SR900,600_.jpg'
} ]

const Booklist = () => {
  return(
  <section className='bookList'>
    {books.map((books) => { const {author, bookTitle, img} = books
  return(<Book author = {author} title = {bookTitle} img = {img}/>) })}
  </section>)}


const Book = (props) => {

const {author, title, img} = props

const styleHeading = {color:'#617d98', fontSize:'0.75rem', marginTop:'0.5rem'}
    return(
        <article className='book'>
          <img src={img} alt={title}/>
          <h4>{title}</h4>
          <h4 style={styleHeading}> {author}</h4>
          
        </article>
    )
}
 
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Booklist/>)