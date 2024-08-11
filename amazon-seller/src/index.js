import React from 'react'
import ReactDOM from "react-dom/client"

const Booklist = () => {
  return (<section>
    <Book/>
    <Book/>
    <Book/>
    </section>
  )
}

const Book = () => {
    return(
        <article>
        <Image/>
        <Title/>
        <Author/>
        </article>
    )
}


const Image =() => <img src='https://images-eu.ssl-images-amazon.com/images/I/81+yTvHAj-L._AC_UL900_SR900,600_.jpg'/>

const Title = () => <h4> Amma Diarylo Konni Pageelu</h4>

const Author = () => <h4> Ravi Mantri </h4> 

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Booklist/>)