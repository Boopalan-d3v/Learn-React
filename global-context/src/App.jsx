import AppContext, {useGlobalContext } from "./Context"
function App() {
  const {name} = useGlobalContext()
  console.log(name);
  
  return <>
    <AppContext/>
  </>
}
export default App
