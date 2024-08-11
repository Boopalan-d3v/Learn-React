import React from "react"
import ReactDOM from "react-dom/client"

function Greating(){
  return(<div className="firstName">
    <h3>React Tutorial</h3>
    <ul>
      <li>
        <a href="#"> Hello </a>
      </li>
    </ul>
  </div>)
}
export default <Greating/>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Greating/>)