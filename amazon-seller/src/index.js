import React from 'react'
import ReactDOM from "react-dom/client"
import {books} from './books'
import Book from './Book';
import './index.css' ;


const Booklist = () => {

  return(
    <><h2>Best selling Books</h2>
  <section className='bookList'>
    {books.map((books, index) => { 
      return(<Book {...books} number = {index} /> ) }
      )}
  </section></>)}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Booklist/>)

