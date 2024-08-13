import React from 'react'
import ReactDOM from "react-dom/client"
import {books} from './books'
import Book from './Book';
import './index.css' ;


const Booklist = () => {

  return(
  <section className='bookList'>
    {books.map((books) => { 
      return(<Book {...books} key= {books.id} /> ) })}
  </section>)}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Booklist/>)

