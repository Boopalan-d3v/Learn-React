import { useParams } from "react-router-dom"

const User = () => {
    const { userName } = useParams()
  return (
    <div>
        <h4>Hello {userName} !</h4>
    </div>
  )
}

export default User