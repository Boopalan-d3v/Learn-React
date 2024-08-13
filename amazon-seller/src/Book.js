const Book = (props) => {

    const {author, title, img} = props
  
    const styleHeading = {color:'#617d98', 
      fontSize:'0.75rem', 
      marginTop:'0.5rem'}
  
    return(
      <article className='book'>
        <img src={img} alt={title}/>
        <h4>{title}</h4>
        <button>Display Title</button>
        <h4 style={styleHeading}> {author}</h4>  
      </article>
    )
  }

  export default Book