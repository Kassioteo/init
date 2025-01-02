// import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <form>
      <label htmlFor="input_name">
        <input type="text" 
        id="input_name" 
        placeholder="kassio..." />
      </label>
      <label htmlFor="textarea_descricao">
        <input type="text" 
        id="textarea_descricao" 
        placeholder="reuniao do serviço..." />
      </label>
      
    </form>
  )
}

export default App
