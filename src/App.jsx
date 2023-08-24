import { useState } from 'react'
import { Login, Footer } from './components'



function App() {
  const [count, setCount] = useState(10)
 

  return (
<>
    
    <Login/>
    <Footer/>

</>
  )
}

export default App
