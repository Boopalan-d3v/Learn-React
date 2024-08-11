import react from "react";
import ReactDom from "react-dom/client"

function Greeting (){
    return <h2> My first Component</h2>;
}

const root  = ReactDom.createRoot(document.getElementById("root"))

root.render(<Greeting/>)
