import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css' ;

const firstBook ={author:'Robert.T Kiyosaki' ,
  bookTitle:'Rich Dad and Poor Dad' ,
  img:'https://images-eu.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL900_SR900,600_.jpg'
}

const secondBook ={
  author :'The Housemaid', 
  bookTitle:'Freida McFadden', 
  img: 'https://images-na.ssl-images-amazon.com/images/I/81AHTyq2wVL._AC_UL900_SR900,600_.jpg' 
}

const thirdBook ={
  author:'James Clear', 
  bookTitle:'Atomic Habits', 
  img:'https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL900_SR900,600_.jpg'
}


const Booklist = () => {
  return (<section className='bookList'>
    <Book 
    author = {firstBook.author} 
    title = {firstBook.bookTitle} 
    img = {firstBook.img} />

    <Book 
    author = {secondBook.author} 
    title = {secondBook.bookTitle} 
    img = {secondBook.img}/>

    <Book 
    author = {thirdBook.author} 
    title = {thirdBook.bookTitle} 
    img = {thirdBook.img}/>
    
    </section>
  )
}

const Book = (props) => {

const styleHeading = {color:'#617d98', fontSize:'0.75rem', marginTop:'0.5rem'}
    return(
        <article className='book'>
          <img src={props.img} alt={props.book}/>
          <h4>{props.title}</h4>
          <h4 style={styleHeading}> {props.author}</h4>
        </article>
    )
}
 
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Booklist/>)