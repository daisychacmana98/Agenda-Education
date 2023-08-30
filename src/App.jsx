import { useState } from 'react'
import { Login, Login2, Olvido_clave, Barralateral, Footer, Registro } from './components'



function App() {
  const [count, setCount] = useState(10)
 

  return (
<>
    
    <Login/>
    <Olvido_clave/>
    <Barralateral/>
    <Registro/>
    <Footer/>
    <Login2/>



</>
  )
}

export default App
