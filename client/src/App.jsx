import axios from "axios"
import { useEffect } from "react"
function App() {
  
const getData = async ()=>{
const data = await axios.get('http://localhost:5000')
console.log(data.data,+"hiiiiiii")
}
useEffect(()=>{
  getData()
},[])
  return (
    <>
     <h1>hello</h1>
    </>
  )
}

export default App
