const Book = (props) => {
    console.log(props)

    const {author, title, img, number, Description} = props
  
    const styleHeading = {color:'#617d98', 
      fontSize:'0.75rem', 
      marginTop:'0.5rem'}
  
    return(
      <article className='book'>
        <span className="indexNumber">{`# ${number +1}`}</span>
        <img src={img} alt={title}/>
        <h4>{title}</h4>
        <button>Display Title</button>
        <h4 style={styleHeading}> {author}</h4>
        <p>{Description}</p>  
      </article>
    )
  }

  export default Book