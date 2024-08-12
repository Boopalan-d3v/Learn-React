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
    img = {firstBook.img} >
      <p>Solo Leveling is a web novel and webtoon series by Chu-Gong that follows the journey of Sung Jin-Woo, a hunter who gains strength independently. The series explores themes of independence, personal growth, and perseverance.</p>
      <button>Click Me</button>
      </Book>

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

const {author, title, img, children} = props

const styleHeading = {color:'#617d98', fontSize:'0.75rem', marginTop:'0.5rem'}
    return(
        <article className='book'>
          <img src={img} alt={title}/>
          <h4>{title}</h4>
          <h4 style={styleHeading}> {author}</h4>
          {children}
        </article>
    )
}
 
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Booklist/>)