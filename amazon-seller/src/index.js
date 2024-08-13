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
    <EventExample />
    {books.map((books) => { 
  return(<Book {...books} key= {books.id}/> ) })}
  </section>)}

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log(e)
    console.log(e.target.name)
    console.log(e.target.value)
    console.log('handle form input')
  }

  const handleButtonClick = () => {
    alert('handle btn click')
  }

  const handleFormsubmission = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }

  return <>
  <form>
    <h2>Typical form</h2>
    <input type='text' 
    name='example' 
    onChange={handleFormInput} 
    style={{margin:'1rem 0'}}></input>
    </form>
    <button type='submit' onClick={handleFormsubmission}> Submit</button>
    <button onClick={handleButtonClick}>Click me</button>
    <button onClick={() => console.log('Hello World')}>Try</button></>
}



const Book = (props) => {

const {author, title, img} = props
console.log(props)
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

